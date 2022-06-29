import { ruleMessage } from '@cnamts/vue-dot/src/helpers/ruleMessage';
import { ValidationRule, ValidationResult, Value } from '@cnamts/vue-dot/src/rules/types';

import { defaultErrorMessages } from './locales';

import { parseDate } from '../../helpers/parseDate';
import { formatDate } from '../../functions/formatDate';
import { isDateAfter } from '../../functions/validation/isDateAfter';

/** Check that the value is not after the specified date (DD/MM/YYYY format) */
export function notAfterDate(date: string, errorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		const formattedValue = formatDate(parseDate(date));

		return !isDateAfter(date, value) || ruleMessage(errorMessages, 'default', [formattedValue]);
	};
}
