/**
 * Insert string at a specific position
 * (if the position doesn't exists, the replacement
 * will be inserted at the end or the start)
 *
 * @param {string} source The string to format
 * @param {number} index The position where the replacement will be inserted (starts at 1)
 * @param {string} replacement The string or character to insert
 * @returns {string} The formatted string
 */
export function insertAt(source: string, index: number, replacement: string): string {
	return source.substr(0, index) + replacement + source.substr(index);
}
