import chalk, { log } from './helpers/chalk';
import cmd from './helpers/cmd';

import * as superb from 'superb';
import * as validate from 'validate-npm-package-name';

module.exports = {
	// Questions for the user
	prompts() {
		return [
			{
				name: 'name',
				message: 'Project name',
				default: '{outFolder}'
			},
			{
				name: 'description',
				message: 'Project description',
				default: `My ${superb.random()} project`
			},
			{
				name: 'author',
				type: 'string',
				message: 'Author name',
				default: '{gitUser.name}',
				store: true
			},
			{
				name: 'pm',
				message: 'Choose a package manager',
				choices: ['npm', 'yarn'],
				type: 'list',
				default: 'yarn'
			}
		];
	},
	actions() {
		const validation = validate(this.answers.name);

		if (validation.warnings) {
			validation.warnings.forEach((warning: string) => {
				console.warn('Warning:', warning)
			});
		}

		if (validation.errors) {
			validation.errors.forEach((error: string) => {
				console.error('Error:', error)
			});

			validation.errors && validation.errors.length && process.exit(1);
		}

		const actions = [{
			type: 'add',
			files: '**',
			templateDir: '@/template'
		}];

		return actions;
	},
	async completed() {
		log('🗃  Initializing git repository…');
		await this.gitInit();

		log('📦  Installing dependencies…');
		await this.npmInstall({ npmClient: this.answers.pm });

		const isNewFolder = this.outDir !== process.cwd();

		const cd = () => {
			if (isNewFolder) {
				cmd(`cd ${this.outFolder}`);
			}
		}

		log();
		log(`🎉  Successfully created project ${chalk.yellow(this.answers.name)}.`);
		log('👉  Get started with the following commands:\n');
		cd();
		cmd(`${this.answers.pm} run serve`);
	}
};
