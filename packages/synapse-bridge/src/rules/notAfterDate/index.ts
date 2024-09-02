import { ruleMessage } from '../../helpers/ruleMessage'
import { ValidationRule, ValidationResult, Value } from '@/rules/types'
import { defaultErrorMessages } from './locales'
import { isDateAfter } from '../../functions/validation/isDateAfter'
import { formatDateToDDMMYYYYFn } from '@/rules/notAfterToday'

/** Check that the value is not after the specified date (DD/MM/YYYY format) */
export function notAfterDate(
	date: string,
	errorMessages = defaultErrorMessages
): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true
		}

		const formattedValue =
			typeof value === 'object' ? formatDateToDDMMYYYYFn(value) : value

		if (isDateAfter(date, formattedValue)) {
			return ruleMessage(errorMessages, 'default', [formattedValue])
		}
		return true
	}
}
