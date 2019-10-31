import ruleMessage from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

/** Check that the field exceeds the min length */
export function minLength(min: number, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return value.length > min || ruleMessage(errorMessages, 'default', [min]);
	};
}

export default minLength;
