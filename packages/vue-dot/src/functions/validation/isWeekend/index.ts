import dayjs from 'dayjs';

/** List of days in weekend */
export const WEEKEND_DAYS = ['Saturday', 'Sunday'];

/**
 * Checks if the date is saturday or sunday
 *
 * @param {string} date The date to check (must be a valid dayjs format, eg. YYYY-MM-DD)
 * @returns {boolean} Is the date in a weekend
 */
export function isWeekend(date: string): boolean {
	/* The name of the day of the week */
	const day = dayjs(date).format('dddd');

	// Check if day is in array
	return WEEKEND_DAYS.includes(day);
}
