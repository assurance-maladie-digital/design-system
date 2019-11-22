import ruleMessage from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

/** Check that the file does not exceeds the max size in byte */
export function fileMaxSize(max: number, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return (value: File) => {
		// If the value is empty, return true (valid)
		if (!value || (Array.isArray(value) && !value.length)) {
			return true;
		}

		return value.size < max || ruleMessage(errorMessages, 'default', [max]);
	};
}

export default fileMaxSize;
