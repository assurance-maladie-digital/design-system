import ruleMessage from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';
import getFileExtension from '../../functions/getFileExtension';

/**
 * Check that the file accept the desired files extension(s) or all if empty
 *
 * @param {string[]} accept : array of accepted files extensions
 * @param {string[]} errorMessages : the default message
 */
export function fileAccept(
	accept: string[],
	errorMessages = defaultErrorMessages
) {
	// Return the validation function
	return (value: File) => {
		// If the file is empty or the accepted array is empty, return true (valid)
		if (!value || (Array.isArray(accept) && !accept.length)) {
			return true;
		}
		const fileExt = getFileExtension(value.name);
		const accepted = accept.join(', ');

		return (
			accept.includes(fileExt) ||
			ruleMessage(errorMessages, 'default', [accepted])
		);
	};
}

export default fileAccept;
