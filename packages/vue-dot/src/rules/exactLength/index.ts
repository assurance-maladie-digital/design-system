import ruleMessage from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

/** Check that the field exceeds the exact length */
export function exactLength(length: number, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return value.length ===  length || ruleMessage(errorMessages, 'default', [length]);
	};
}

export default exactLength;
