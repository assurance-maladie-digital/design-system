import dayjs from 'dayjs';

import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

export type Interval = '()' | '[]' | '[)' | '(]';

/** Check if a date is in a range */
export function isDateInRange(
	date: string,
	startDate: string,
	endDate: string,
	interval: Interval = '[)' // '[' indicates inclusion, '(' indicates exclusion
): boolean {
	const rangePositive = dayjs(startDate).isBefore(dayjs(endDate));

	if (rangePositive) {
		return dayjs(date).isBetween(startDate, endDate, null, interval);
	}

	return false;
}
