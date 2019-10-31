import ruleMessage from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

/** Check that the field is non-empty */
export function required(errorMessages = defaultErrorMessages) {
	// The value can be an array of string in select with the multiple prop
	return (value: string | string[]) => {
		let valid: boolean;

		// If the value is an array
		if (Array.isArray(value)) {
			// Check it's length
			valid = value.length !== 0;
		} else {
			// If the value is falsy (empty string),
			// it will return the error message

			// If the value is evaluated to true (non-empty string),
			// it will return true (success)
			valid = Boolean(value);
		}

		return valid || ruleMessage(errorMessages, 'default');
	};
}

export default required();
