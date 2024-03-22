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
	// https://stackoverflow.com/questions/69552023/after-update-typescript-3-7-2-to-latest-typescript-4-4-4-error-ts2339
	const nav = window.navigator as any;

	const blob = new Blob(blobContent, { type });

	if (nav.msSaveOrOpenBlob) {
		nav.msSaveOrOpenBlob(blob, filename);
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
