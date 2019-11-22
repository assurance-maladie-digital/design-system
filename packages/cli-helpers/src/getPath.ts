import * as path from 'path';

/**
 * Get path relative to current working directory
 *
 * @param {string} value The path to join
 * @returns {string} The normalized path
 */
export default function getPath(value: string): string {
	return path.join(process.cwd(), value);
}
