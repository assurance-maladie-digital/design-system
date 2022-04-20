/** Get the extension of a file */
export function getFileExtension(fileName: string): string {
	// lastIndexOf returns '.xxx', add 1 to slice the dot
	return fileName.slice(fileName.lastIndexOf('.') + 1);
}
