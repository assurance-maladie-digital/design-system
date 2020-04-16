import dayjs from 'dayjs';

import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

/**
 * Check that a date is in a "positive" range
 *
 * @param {string} date The date to test
 * @param {string} startDate The start of the range
 * @param {string} endDate The end of the range
 * @param {string} [interval] The interval for the isBetween function
 * '[' indicates inclusion, '(' indicates exclusion
 * @returns {boolean} Is the date in range
 */
export function isDateInRange(
	date: string,
	startDate: string,
	endDate: string,
	interval = '[)' // By default, don't include the endDate
): boolean {
	/** The range is "positive" if the startDate is before the endDate */
	const rangePositive = dayjs(startDate).isBefore(dayjs(endDate));

	// If the range is positive
	if (rangePositive) {
		// Return true if the date is between startDate & endDate
		return dayjs(date).isBetween(startDate, endDate, null, interval);
	}

	// Default to false
	return false;
}
