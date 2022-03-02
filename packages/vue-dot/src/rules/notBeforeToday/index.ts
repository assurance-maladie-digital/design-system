import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { defaultErrorMessages } from './locales';

import { isDateAfterNow } from './isDateAfterNow';

/** Check that the value is not before today (DD/MM/YYYY format) */
export function notBeforeTodayFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		// If the date is after now, it's a future date, it's valid,
		// else, the date is before today, it's invalid
		return isDateAfterNow(value) || ruleMessage(errorMessages, 'default');
	};
}

export const notBeforeToday = notBeforeTodayFn();
