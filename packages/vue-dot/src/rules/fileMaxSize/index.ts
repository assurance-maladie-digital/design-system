import { ruleMessage } from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

/**
 * Check that the file does not exceeds the max size in byte
 *
 * @param {number} max : the max size in byte
 * @param {ErrorMessages<number>} errorMessages : the default message
 */
export function fileMaxSize(max: number, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return (value: File | undefined) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return value.size < max || fileMaxSizeMessage(max, errorMessages);
	};
}

/**
 * Get the max size message
 *
 * @param {number} max The max size
 * @param {ErrorMessages<number>} errorMessages : the default message
 */
export function fileMaxSizeMessage(max: number, errorMessages = defaultErrorMessages) {
	return ruleMessage(errorMessages, 'default', [max]);
}
