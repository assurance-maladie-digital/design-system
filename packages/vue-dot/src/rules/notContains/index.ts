import ruleMessage from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

/**
 * Check that the text accept the desired caracters
 *
 * @param {string[]} accept : array of accepted caracters
 * @param {string} errorMessages : the default message
 */
export function notContains(
	accept: string[],
	errorMessages = defaultErrorMessages
) {
	// Return the validation function
	return (value: string) => {
		// If the file is empty or the accepted array is empty, return true (valid)
		if (!value || (Array.isArray(accept) && !accept.length)) {
			return true;
		}

		const accepted = accept.join(', ');

		return (
			!accept.some((text: string) => value.includes(text)) ||
			ruleMessage(errorMessages, 'default', [accepted])
		);
	};
}

export default notContains;
