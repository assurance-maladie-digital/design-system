import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ErrorMessages } from '../types';

import { defaultErrorMessages } from './locales';

/**
 * Check that the field does not exceeds the exact length
 *
 * @param {number} length The exact length allowed
 * @param {ErrorMessages} [errorMessages] Custom error messages
 * @returns {ValidationRule} Validation result
 */
export function exactLengthFn(length: number, errorMessages: ErrorMessages<number> = defaultErrorMessages): ValidationRule {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return value.length === length || ruleMessage(errorMessages, 'default', [length]);
	};
}

export const exactLength = exactLengthFn;
