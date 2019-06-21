import { log, cmd, warn, error, done } from '@cnamts/cli-helpers';
import chalk from 'chalk';

import * as spawn from 'cross-spawn';
import * as glob from 'glob';
import validate from 'validate-npm-package-name';

import * as path from 'path';

import * as Superb from 'superb';
// Make a function, so you can call superb()
const superb = () => Superb.random();

function getPath(value: string) {
	return path.join(__dirname, value);
}

module.exports = {
	/** Questions for the user */
	prompts() {
		return [
			{
				// Project name
				name: 'name',
				message: 'Project name',
				default: '{outFolder}'
			},
			{
				// Project description
				name: 'description',
				message: 'Project description',
				default: `My ${superb()} project`
			},
			{
				// Project author
				name: 'author',
				type: 'string',
				message: 'Author name',
				default: '{gitUser.name}',
				store: true
			},
			{
				// Package manager to use
				name: 'pm',
				message: 'Choose a package manager',
				choices: ['npm', 'yarn'],
				type: 'list',
				default: 'yarn'
			},
			{
				// Launch application after creation
				name: 'autoStart',
				type: 'confirm',
				message: 'Auto start application after creation',
				default: false
			}
		];
	},

	/** Actions on the files */
	actions() {
		// Validate the application name
		const validation = validate(this.answers.name);

		// Warnings
		if (validation.warnings) {
			validation.warnings.forEach((warning: string) => {
				warn(warning)
			});
		}

		// Errors
		if (validation.errors) {
			// Log all errors
			validation.errors.forEach((err: string) => {
				error(err);
			});

			// Exit
			process.exit(1);
		}

		// Add all files from the ./template folder
		const actions: any[] = [{
			type: 'add',
			files: '**',
			templateDir: getPath('./template')
		}];

		// Move & rename static files
		actions.push({
			type: 'move',
			patterns: {
				'gitignore': '.gitignore',
				'_package.json': 'package.json',
				'_.eslintrc.js': '.eslintrc.js',
				'_.eslintignore': '.eslintignore'
			}
		});

		// Return array of .ejs files in ./template
		const files: string[] = glob.sync(getPath('./template/**/*.ejs'));

		const patterns: any = {};

		// Move & rename EJS files

		// in /template, some files are prefixed with .ejs
		// to avoid linter & editor problems
		files.forEach((file) => {
			// Convert 'package/location/template/x/file.y'
			// to 'x/file.y'
			// slice(1) remove the first char (here it's '/')
			const filePath = file.replace(getPath('./template'), '').slice(1);

			// Remove .ejs (4 last chars)
			const trimed = filePath.slice(0, -4);

			// Add to patterns
			patterns[filePath] = trimed;
		});

		// Rename the files by moving
		actions.push({
			type: 'move',
			patterns
		});

		// Modify public/index.html
		actions.push({
			type: 'modify',
			files: 'public/index.html',
			handler(data: string) {
				// Replace special match for EJS compilation by Vue CLI
				const newData = data.replace(/{BASE_URL}/g, '<%= BASE_URL %>');

				return newData;
			}
		});

		return actions;
	},

	/** After prompt & actions */
	async completed() {
		log('🗃  Initializing git repository…');
		await this.gitInit();

		log('📦  Installing dependencies…');
		await this.npmInstall({ npmClient: this.answers.pm });

		log();
		done(`🎉  Successfully created project ${chalk.yellow(this.answers.name)}.`);

		if (this.answers.autoStart === false) {
			log();
			log('👉  Get started with the following commands:\n');

			const isNewFolder = this.outDir !== process.cwd();

			if (isNewFolder) {
				cmd(`cd ${this.outFolder}`);
			}

			cmd(`${this.answers.pm} run serve`);
		} else {
			const options = ['run', 'serve'];

			spawn.sync(this.answers.pm, options, {
				cwd: this.outDir,
				stdio: 'inherit'
			});
		}
	}
};
