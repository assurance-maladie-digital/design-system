import dayjs from 'dayjs';

/**
 * Format a date with dayjs to specified format (default YYYY-MM-DD)
 *
 * @param {dayjs.Dayjs} [date] The date to format
 * @param {string} [format=YYYY-MM-DD] The format to parse the date to
 * @returns {string} The formated date
 */
export function formatDateISO(date: dayjs.Dayjs | undefined, format = 'YYYY-MM-DD'): string {
	// If no date is provided, return empty string
	// else, format the date
	return date === undefined ? '' : date.format(format);
}
