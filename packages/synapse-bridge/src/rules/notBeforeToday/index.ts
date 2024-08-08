import { ruleMessage } from '../../helpers/ruleMessage'
import {
	ValidationRule,
	ValidationResult,
	ErrorMessages,
	Value,
} from '../types'

import { defaultErrorMessages } from './locales'

import { isDateBefore } from '../../functions/validation/isDateBefore'
import { TODAY } from '../../constants'

export function formatDateToDDMMYYYY(date: Date): string {
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()
	return `${day}/${month}/${year}`
}
/** Check that the value is not before today (DD/MM/YYYY format) */
export function notBeforeTodayFn(
	errorMessages: ErrorMessages = defaultErrorMessages
): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true
		}
		const formattedValue =
			typeof value === 'object' ? formatDateToDDMMYYYY(value) : value
		if (isDateBefore(TODAY, formattedValue)) {
			return ruleMessage(errorMessages, 'default')
		}
		return true
	}
}

export const notBeforeToday = notBeforeTodayFn()
