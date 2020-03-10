import { ruleMessage } from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

import { isDateValid as checkIfDateValid } from '../../functions/validation/isDateValid';

/** Check that the date is valid (expects ##/##/#### format) */
export function isDateValidFn(errorMessages = defaultErrorMessages) {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		const validationResult = checkIfDateValid(value);
		// Convert validation result to proper error message
		const errorMessage = typeof validationResult === 'string' ? ruleMessage(errorMessages, validationResult) : true;

		return errorMessage || ruleMessage(errorMessages, 'default');
	};
}

export const isDateValid = isDateValidFn();
