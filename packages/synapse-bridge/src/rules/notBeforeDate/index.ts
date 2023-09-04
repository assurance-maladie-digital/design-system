import { ruleMessage } from '@cnamts/vue-dot/src/helpers/ruleMessage';
import { ValidationRule, ValidationResult, Value } from '@cnamts/vue-dot/src/rules/types';

import { defaultErrorMessages } from './locales';

import { parseDate } from '../../helpers/parseDate';
import { formatDate } from '../../functions/formatDate';
import { isDateBefore } from '../../functions/validation/isDateBefore';

/** Check that the value is not after the specified date (DD/MM/YYYY format) */
export function notBeforeDate(date: string, errorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		const formattedValue = formatDate(parseDate(date));

		return !isDateBefore(date, value) || ruleMessage(errorMessages, 'default', [formattedValue]);
	};
}
