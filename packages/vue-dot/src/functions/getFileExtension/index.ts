/** Get the extension of a file */
export function getFileExtension(filename: string): string {
	// lastIndexOf returns '.xxx', add 1 to slice the dot
	return filename.slice(filename.lastIndexOf('.') + 1);
}
