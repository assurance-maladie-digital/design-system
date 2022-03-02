import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { defaultErrorMessages } from './locales';

import { isDateAfterValue } from '../../functions/isDateAfterValue';
import { TODAY } from '../../constants';

/**
 * Check that the date is not after today (expects DD/MM/YYYY format)
 *
 * @param {ErrorMessages} [errorMessages] Custom error messages
 * @returns {ValidationRule} Validation result
 */
export function notAfterTodayFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		return !isDateAfterValue(TODAY, value) || ruleMessage(errorMessages, 'default');
	};
}

export const notAfterToday = notAfterTodayFn();
