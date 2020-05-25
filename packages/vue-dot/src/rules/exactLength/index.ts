import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages } from '../types';

import { defaultErrorMessages } from './locales';

/**
 * Check that the field does not exceeds the exact length
 *
 * @param {number} lengthValue The exact length allowed
 * @param {boolean} ignoreSpaces Don't count spaces in value
 * @param {ErrorMessages} [errorMessages] Custom error messages
 * @returns {ValidationRule} Validation result
 */
export function exactLengthFn(lengthValue: number, ignoreSpaces = false, errorMessages: ErrorMessages<number> = defaultErrorMessages): ValidationRule {
	return (value: string): ValidationResult => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		if (ignoreSpaces) {
			value = value.replace(/\s/g, '');
		}

		return value.length === lengthValue || ruleMessage(errorMessages, 'default', [lengthValue]);
	};
}

export const exactLength = exactLengthFn;
