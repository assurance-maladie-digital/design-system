import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages } from '../types';

import { isEmailValid } from '../../functions/validation/isEmailValid';

import { defaultErrorMessages } from './locales';

/**
 * Check that the email is valid
 *
 * @param {ErrorMessages} [errorMessages] Custom error messages
 * @returns {ValidationRule} Validation result
 */
export function emailFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: string): ValidationResult => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return isEmailValid(value) || ruleMessage(errorMessages, 'default');
	};
}

export const email = emailFn();
