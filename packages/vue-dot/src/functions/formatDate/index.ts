import dayjs, { Dayjs } from 'dayjs';

/**
 * Format a date with dayjs to specified format (default DD/MM/YYYY)
 *
 * @param {Dayjs} [date] The date to format
 * @param {string} [format=DD/MM/YYYY] The format to parse the date to
 * @returns {string} The formatted date
 */
export function formatDate(date: Dayjs, format = 'DD/MM/YYYY'): string {
	return dayjs(date).format(format);
}
