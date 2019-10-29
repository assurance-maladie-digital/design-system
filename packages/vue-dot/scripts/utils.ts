import * as path from 'path';
import { readFileSync, writeFileSync } from 'fs';

import { StdioOptions } from 'child_process';

/**
 * Get path relative current working directory
 *
 * @param {string} value The path to join
 * @returns {string} The normalized path
 */
export function getPath(value: string): string {
	return path.join(process.cwd(), value);
}

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
