import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { defaultErrorMessages } from './locales';

import { isDateBefore } from '../../functions/validation/isDateBefore';
import { TODAY } from '../../constants';

/** Check that the value is not before today (DD/MM/YYYY format) */
export function notBeforeTodayFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}
		return !isDateBefore(TODAY, value) || ruleMessage(errorMessages, 'default');
	};
}

export const notBeforeToday = notBeforeTodayFn();
