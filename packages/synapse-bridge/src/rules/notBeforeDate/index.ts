import { ruleMessage } from '../../helpers/ruleMessage'
import { ValidationRule, ValidationResult, Value } from '@/rules/types'

import { defaultErrorMessages } from './locales'

import { isDateBefore } from '../../functions/validation/isDateBefore'
import { formatDateToDDMMYYYYFn } from '@/rules/notAfterToday'

/** Check that the value is not after the specified date (DD/MM/YYYY format) */
export function notBeforeDate(
	date: string,
	errorMessages = defaultErrorMessages
): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true
		}

		const formattedValue =
			typeof value === 'object' ? formatDateToDDMMYYYYFn(value) : value

		if (isDateBefore(date, formattedValue)) {
			return ruleMessage(errorMessages, 'default', [formattedValue])
		}
		return true
	}
}
