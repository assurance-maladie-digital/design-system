import { ruleMessage } from '@cnamts/vue-dot/src/helpers/ruleMessage';
import { ValidationRule, ValidationResult, Value } from '@cnamts/vue-dot/src/rules/types';

import { defaultErrorMessages } from './locales';

import { parseDate } from '../../helpers/parseDate';
import { isDateAfterValue } from '../../functions/isDateAfterValue';
import { formatDate } from '../../functions/formatDate';

/** Check that the date is not after a value (expects DD/MM/YYYY format) */
export function notAfterDate(date: string, errorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		const formattedValue = formatDate(parseDate(date));

		return !isDateAfterValue(date, value) || ruleMessage(errorMessages, 'default', [formattedValue]);
	};
}
