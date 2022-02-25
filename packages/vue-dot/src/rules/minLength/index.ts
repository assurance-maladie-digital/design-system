import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { defaultErrorMessages } from './locales';

/**
 * Check that the field exceeds the min length
 *
 * @param {number} min Minimum length
 * @param {boolean} ignoreSpaces Don't count spaces in value
 * @param {ErrorMessages} [errorMessages] Custom error messages
 * @returns {ValidationRule} Validation result
 */
export function minLengthFn(min: number, ignoreSpaces = false, errorMessages: ErrorMessages<number> = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		if (ignoreSpaces) {
			value = value.replace(/\s/g, '');
		}

		return value.length >= min || ruleMessage(errorMessages, 'default', [min]);
	};
}

export const minLength = minLengthFn;
