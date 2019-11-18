import dayjs from 'dayjs';

import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

/**
 * Checks that a date is in a range
 *
 * @param {string} date The date to test
 * @param {string} startDate The start of the range
 * @param {string} endDate The end of the range
 * @param {string} [interval] The interval for the isBetween function
 * '[' indicates inclusion, '(' indicates exclusion
 */
export default function isDateInRange(
	date: string,
	startDate: string,
	endDate: string,
	interval = '[)' // By default, don't include the endDate (it's the selected one)
) {
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
