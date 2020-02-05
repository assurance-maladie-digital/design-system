/**
 * Returns the extension of a file (without the dot)
 *
 * @param {string} fileName The name of the file (with extension)
 */
export function getFileExtension(fileName: string): string {
	// lastIndexOf returns '.xxx', add 1 to slice the dot
	return fileName.slice(fileName.lastIndexOf('.') + 1);
}
