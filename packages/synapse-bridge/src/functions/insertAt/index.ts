/**
 * Insert string at a specific position
 * If the position doesn't exists, the replacement
 * will be inserted at the end or the start
 */
export function insertAt(source: string, index: number, replacement: string): string {
	return source.slice(0, Math.max(0, index)) + replacement + source.slice(Math.max(0, index));
}
