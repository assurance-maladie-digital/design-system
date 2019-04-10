import chalk, { log } from '../helpers/chalk';

import renderHeader from '../helpers/header';
renderHeader();

import { resolve } from 'path';
import * as sao from 'sao';

interface Argv {
	name: string;
}

exports.command = 'create [name]';
exports.builder = {};

exports.handler = async (argv: Argv) => {
	// In a custom directory or current directory
	const outDir = resolve(argv.name || '.');

	log(`✨  Creating new project in ${chalk.yellow(outDir)}`);

	const generator = resolve(__dirname, '../');

	// See https://saojs.org/api.html#standalone-cli
	await sao({ generator, outDir, logLevel: 2 })
		.run()
		.catch((error: Error) => {
			console.trace(error);
			process.exit(1);
		});
};
