import dayjs from 'dayjs';

export const WEEKEND_DAYS = ['Saturday', 'Sunday'];

/** Check if a date is Saturday or Sunday */
export function isWeekend(date: string): boolean {
	const day = dayjs(date).format('dddd');

	return WEEKEND_DAYS.includes(day);
}
