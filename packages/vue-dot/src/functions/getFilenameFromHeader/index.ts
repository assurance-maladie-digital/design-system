/**
 * Returns filename from Content-Disposition header
 *
 * @param {string} header The header to extract the filename from
 * @param {string} [fallback] A fallback filename (if not provided, returns empty string)
 * @returns {string} The filename
 */
export function getFilenameFromHeader(header: string, fallback?: string): string {
	let filename = '';

	// If we have the Content-Disposition header,
	// read the filename from it
	if (header) {
		/** The header may looks like this: 'inline; filename="name.ext"; other' */
		const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;

		const matches = filenameRegex.exec(header);

		if (matches !== null && matches[1]) {
			// Remove double-quotes
			filename = matches[1].replace(/['"]/g, '');
		}
	}

	if (!filename) {
		// If we couldn't determine a filename,
		// use the fallback one
		filename = fallback || '';
	}

	return filename;
}
