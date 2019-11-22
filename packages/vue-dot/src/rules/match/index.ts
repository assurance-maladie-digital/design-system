import ruleMessage from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

/** Check that the field exceeds the exact regex */
export function match(regex: RegExp, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return regex.test(value) || ruleMessage(errorMessages, 'default', [regex.toString()]);
	};
}

export default match;
