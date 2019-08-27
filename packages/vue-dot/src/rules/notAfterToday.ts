import ruleMessage from '../helpers/ruleMessage';
import { ErrorMessages } from './types';

import dayjs from 'dayjs';
import parseDate from '../helpers/parseDate';

const defaultErrorMessages: ErrorMessages = {
	default: 'La date doit être antérieure à aujourd\'hui.'
};

/** Check that the date is before now */
function isDateBeforeNow(value: string) {
	// Date is DD/MM/YYYY format
	const date = parseDate(value);
	const now = dayjs();

	// Is the date before now?
	const result = dayjs(date).isBefore(now);

	return result;
}

/** Check that the date is not after today (expects ##/##/#### format) */
export function notAfterToday(errorMessages = defaultErrorMessages) {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		// If the date is before now, it's a past date, it's valid,
		// else, the date is after today, it's invalid
		return isDateBeforeNow(value) || ruleMessage(errorMessages, 'default');
	};
}

export default notAfterToday();
