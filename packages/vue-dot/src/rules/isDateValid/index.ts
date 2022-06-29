import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { defaultErrorMessages } from './locales';

import { isDateValid as checkIfDateValid } from '../../functions/validation/isDateValid';

/** Check that the value is a valid date (DD/MM/YYYY format) */
export function isDateValidFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		const validationResult = checkIfDateValid(value);
		const errorMessage = typeof validationResult === 'string' ? ruleMessage(errorMessages, validationResult) : true;

		return errorMessage || ruleMessage(errorMessages, 'default');
	};
}

export const isDateValid = isDateValidFn();
