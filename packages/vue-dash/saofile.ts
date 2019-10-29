import { log, cmd, warn, error, done } from '@cnamts/cli-helpers';
import chalk from 'chalk';

import * as spawn from 'cross-spawn';
import * as glob from 'glob';
import validate from 'validate-npm-package-name';

import * as path from 'path';
import * as fs from 'fs-extra';

import Superb from 'superb';
// Make a function, so you can call superb()
const superb = (): string => Superb.random();

function getPath(value: string): string {
	return path.join(__dirname, value);
}

function getPathCWD(value: string): string {
	return path.join(process.cwd(), value);
}

interface Patterns {
	[key: string]: string;
}

interface Actions {
	type: string;
	files?: string | string[];
	templateDir?: string;
	patterns?: Patterns;
	handler?: (data: string) => string;
	when?: boolean;
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
				// Use i18n (Internationalization)
				name: 'i18n',
				type: 'confirm',
				message: 'Use i18n (internationalization)',
				default: false
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
				warn(warning);
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
		const actions: Actions[] = [{
			type: 'add',
			files: '**',
			templateDir: getPath('./template')
		}];

		// Move & rename static files
		actions.push({
			type: 'move',
			patterns: {
				'gitignore': '.gitignore',
				'_.eslintrc.js': '.eslintrc.js',
				'_.eslintignore': '.eslintignore'
			}
		});

		// Return array of .ejs files in ./template
		const files: string[] = glob.sync(getPath('./template/**/*.ejs'));

		const patterns: Patterns = {};

		// Move & rename EJS files

		// in /template, some files are prefixed with .ejs
		// to avoid linter & editor problems
		files.forEach((file) => {
			// Convert 'package/location/template/x/file.y'
			// to 'x/file.y'
			// slice(1) remove the first char (here it's '/')
			const filePath = file.replace(getPath('./template'), '').slice(1);

			// Remove .ejs (4 last chars)
			const filename = filePath.slice(0, -4);

			// Add to patterns
			patterns[filePath] = filename;
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
		if (!this.answers.i18n) {
			// Delete i18n files if no i18n
			// 'remove' action isn't working with folders, do it with fsExtra
			// (needs to be done here to work)
			const i18nPaths = [
				// Translations folder
				getPathCWD(this.answers.name + '/src/translations'),
				getPathCWD(this.answers.name + '/src/i18n.ts')
			];

			// Delete for each path
			i18nPaths.forEach((path) => {
				fs.removeSync(path);
			});
		}

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
