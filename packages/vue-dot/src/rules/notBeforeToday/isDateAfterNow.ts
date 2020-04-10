import dayjs from 'dayjs';

import { parseDate } from '../../helpers/parseDate';

/**
 * Check that the date is after now
 *
 * @param {string} value The date to compare
 * @returns {boolean} Is the date after now
 */
export function isDateAfterNow(value: string): boolean {
	// Date is DD/MM/YYYY format
	const date = parseDate(value);
	const now = dayjs();

	const result = dayjs(date).isAfter(now);

	return result;
}
