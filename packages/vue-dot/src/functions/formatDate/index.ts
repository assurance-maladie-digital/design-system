import dayjs, { Dayjs } from 'dayjs';

/** Format a date with dayjs */
export function formatDate(date: Dayjs, format = 'DD/MM/YYYY'): string {
	return dayjs(date).format(format);
}
