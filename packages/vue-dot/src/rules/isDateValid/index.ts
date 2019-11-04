import ruleMessage from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

import checkIfDateValid from './checkIfDateValid';

/** Check that the date is valid (expects ##/##/#### format) */
export function isDateValid(errorMessages = defaultErrorMessages) {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return checkIfDateValid(value, errorMessages) || ruleMessage(errorMessages, 'default');
	};
}

export default isDateValid();
