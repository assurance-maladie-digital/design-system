/**
 * downloadFile function
 * It will download the content from the brower
 *
 * @param {BufferSource | Blob | string} content The content to download
 * @param {string} filename The filename to download
 * @param {string} type The file type
 * @param {boolean} utf8Bom The utf8 file content
 */
export function downloadFile(
	content: BufferSource | Blob | string,
	filename: string,
	type: string,
	utf8Bom = false
): void {
	/**
	 * \ufeff = UTF-8 encoding
	 *
	 * @see https://stackoverflow.com/a/18925211
	 */
	const blobContent: BlobPart[] = utf8Bom ? ['\ufeff', content] : [content];

	const blob = new Blob(blobContent, { type });

	if (0 < navigator.appVersion.toString().indexOf('.NET')) {
		window.navigator.msSaveOrOpenBlob(blob, filename);
	} else {
		const link = document.createElement('a');
		link.target = '_blank';
		link.style.display = 'none';
		link.rel = 'noopener noreferrer';
		link.href = window.URL.createObjectURL(blob);
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		window.URL.revokeObjectURL(link.href);
	}
}
