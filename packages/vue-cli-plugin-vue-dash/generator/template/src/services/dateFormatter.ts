import dayjs from 'dayjs';

/**
 * Format a date with dayjs to specified format (default DD/MM/YYYY)
 *
 * @param {string} [date] The date to format
 * @param {string} [format=DD/MM/YYYY] The format to parse the date to
 * @returns {string} The formatted date
 */
export function formatDate(date: string | undefined, format = 'DD/MM/YYYY'): string {
	// If no date is provided, return empty string
	// else, format the date
	return date === undefined ? '' : dayjs(date).format(format);
}

/**
 * Format a date with time to DD/MM/YYYY HH:mm format
 *
 * @param {string} [date] The date to format
 * @returns {string} The formatted date
 */
export function formatDateTime(date: string | undefined): string {
	return formatDate(date, 'DD/MM/YYYY HH:mm');
}
