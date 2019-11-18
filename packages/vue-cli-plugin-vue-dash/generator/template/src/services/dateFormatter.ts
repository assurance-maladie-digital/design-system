import dayjs from 'dayjs';

/** Format a date with dayjs to specified format (default DD/MM/YYYY) */
export default function formatDate(date: string | undefined, format = 'DD/MM/YYYY'): string {
	// If no date is provided, return empty string
	// else, format the date
	return date === undefined ? '' : dayjs(date).format(format);
}

/** Format a date with time to DD/MM/YYYY HH:mm format */
export function formatDateTime(date: string | undefined): string {
	return formatDate(date, 'DD/MM/YYYY HH:mm');
}
