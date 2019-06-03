import { event, error } from '@cnamts/cli-helpers';
import chalk from 'chalk';

import { resolve } from 'path';
import sao from 'sao';

interface Argv {
	name: string;
}

exports.command = 'create [name] [options]';
exports.desc = 'Create new application';

exports.handler = async(argv: Argv) => {
	// In a custom directory or current directory
	const outDir = resolve(argv.name || process.cwd());

	event(`✨  Creating new application in ${chalk.yellow(outDir)}`);

	const generator = resolve(__dirname, '../');

	// See https://saojs.org/api.html#standalone-cli
	await sao({ generator, outDir, logLevel: 2 })
		.run()
		.catch((err: Error) => {
			error(err.message);
			process.exit(1);
		});
};
