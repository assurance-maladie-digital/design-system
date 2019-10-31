import * as path from 'path';
import { readFileSync, writeFileSync } from 'fs';

import { StdioOptions } from 'child_process';

/** Common options for exec function */
export const execOpts = {
	stdio: 'inherit' as StdioOptions
};

/**
 * Append a string to the beginning of a file
 *
 * @param {string} path Path of the file
 * @param {string} data The data to append
 */
export function writeToBeginning(path: string, data: string) {
	const lines = readFileSync(path).toString().split('\n');

	lines.unshift(data);

	writeFileSync(path, lines.join('\n'));
}
