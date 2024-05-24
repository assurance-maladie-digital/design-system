import { ruleMessage } from '../../helpers/ruleMessage';
import { isDateAfter } from '../../functions/validation/isDateAfter/index.ts';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';
import { defaultErrorMessages } from './locales';
import { TODAY } from '../../constants';

/** Check that the value is not after today (DD/MM/YYYY format) */
export function notAfterTodayFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		return !isDateAfter(TODAY, value) || ruleMessage(errorMessages, 'default');
	};
}

export const notAfterToday = notAfterTodayFn();
