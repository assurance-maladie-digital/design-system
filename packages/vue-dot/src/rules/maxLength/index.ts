import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ErrorMessages } from '../types';

import { defaultErrorMessages } from './locales';

/**
 * Check that the field does not exceeds the max length
 *
 * @param {number} max Maximum length
 * @param {ErrorMessages} [errorMessages] Custom error messages
 * @returns {ValidationRule} Validation result
 */
export function maxLengthFn(max: number, errorMessages: ErrorMessages<number> = defaultErrorMessages): ValidationRule {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return value.length < max || ruleMessage(errorMessages, 'default', [max]);
	};
}

export const maxLength = maxLengthFn;
