import { BufferSource } from './types';

/** Download a file */
export function downloadFile(
	content: BufferSource | Blob | string,
	filename: string,
	type: string,
	utf8Bom = false // UTF-8 header for Excel files
): void {
	/**
	 * \ufeff = UTF-8 encoding
	 * @see https://stackoverflow.com/a/18925211
	 */
	const blobContent: BlobPart[] = utf8Bom ? ['\ufeff', content] : [content];

	const blob = new Blob(blobContent, { type });

	if (window.navigator.msSaveOrOpenBlob) {
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
