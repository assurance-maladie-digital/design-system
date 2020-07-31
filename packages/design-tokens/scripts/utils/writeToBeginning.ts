import { readFileSync, writeFileSync } from 'fs';

/**
 * Append a string to the beginning of a file
 *
 * @param {string} path Path of the file
 * @param {string} data The data to append
 * @returns {void}
 */
export function writeToBeginning(path: string, data: string): void {
	const lines = readFileSync(path).toString().split('\n');

	lines.unshift(data);

	writeFileSync(path, lines.join('\n'));
}
