import dayjs from 'dayjs';

import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

/**
 * Checks that a date is in a range
 *
 * @param {string} date The date to test
 * @param {string} startDate The start of the range
 * @param {string} endDate The end of the range
 * @param {string} interval The interval for the isBetween function
 */
export default function isDateInRange(
	date: string,
	startDate: string,
	endDate: string,
	interval = '[)' // By default, don't include the endDate (it's the selected one)
) {
	return dayjs(date).isBetween(startDate, endDate, null, interval);
}
