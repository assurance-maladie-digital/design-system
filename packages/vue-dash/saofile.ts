import chalk, { log, cmd, warn, error } from './helpers/logger';

import * as spawn from 'cross-spawn';
import * as glob from 'glob';
import * as validate from 'validate-npm-package-name';

import * as Superb from 'superb';
// Make a function, so you can call superb()
const superb = () => Superb.random();

module.exports = {
	// Questions for the user
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
	// Actions on the files
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

		// Add all files
		const actions: any[] = [{
			type: 'add',
			files: '**',
			templateDir: './template'
		}];

		// Move & rename static files
		actions.push({
			type: 'move',
			patterns: {
				'gitignore': '.gitignore',
				'_package.json': 'package.json',
				'_.eslintrc.js': '.eslintrc.js',
				'_.eslintignore': '.eslintignore',
				'_tsconfig.json': 'tsconfig.json'
			}
		});

		const tsPatterns: any = {};

		const files: string[] = glob.sync('./template/**/*.ejs');

		if (files) {
			// Move & rename EJS files
			// in /template, some files are prefixed with .ejs
			// to avoid linter & editor problems
			files.forEach((file) => {
				const filePath = file.replace('./template/', '');
				// Remove .ejs (4 last chars)
				const trimed = filePath.slice(0, -4);

				// Add to patterns
				tsPatterns[filePath] = trimed;
			});

			actions.push({
				type: 'move',
				patterns: tsPatterns
			});
		}

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
	// After prompt & actions
	async completed() {
		log('🗃  Initializing git repository…');
		await this.gitInit();

		log('📦  Installing dependencies…');
		await this.npmInstall({ npmClient: this.answers.pm });

		log();
		log(`🎉  Successfully created project ${chalk.yellow(this.answers.name)}.`);

		if (this.answers.autoStart === false) {
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
