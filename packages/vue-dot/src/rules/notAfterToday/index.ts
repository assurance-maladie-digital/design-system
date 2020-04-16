import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ErrorMessages } from '../types';

import { defaultErrorMessages } from './locales';

import { isDateBeforeNow } from './isDateBeforeNow';

/**
 * Check that the date is not after today (expects ##/##/#### format)
 *
 * @param {ErrorMessages} [errorMessages] Custom error messages
 * @returns {ValidationRule} Validation result
 */
export function notAfterTodayFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		// If the date is before now, it's a past date, it's valid,
		// else, the date is after today, it's invalid
		return isDateBeforeNow(value) || ruleMessage(errorMessages, 'default');
	};
}

export const notAfterToday = notAfterTodayFn();
