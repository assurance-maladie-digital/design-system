import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { defaultErrorMessages } from './locales';

import { isDateBeforeValue } from '../../functions/isDateBeforeValue';
import { TODAY } from '../../constants';

/**
 * Check that the date is not before today (expects ##/##/#### format)
 *
 * @param {ErrorMessages} [errorMessages] Custom error messages
 * @returns {ValidationRule} Validation result
 */
export function notBeforeTodayFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		return !isDateBeforeValue(TODAY, value) || ruleMessage(errorMessages, 'default');
	};
}

export const notBeforeToday = notBeforeTodayFn();
