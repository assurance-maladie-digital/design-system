import dayjs from 'dayjs';

import { parseDate } from '../../helpers/parseDate';

/**
 * Check that the date is before now
 *
 * @param {string} value The date to compare
 * @returns {boolean} Is the date before now
 */
export function isDateBeforeNow(value: string): boolean {
	// Date is DD/MM/YYYY format
	const date = parseDate(value);
	const now = dayjs();

	const result = dayjs(date).isBefore(now);

	return result;
}
