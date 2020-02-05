import dayjs from 'dayjs';

import { parseDate } from '../../helpers/parseDate';

/** Check that the date is before now */
export function isDateBeforeNow(value: string) {
	// Date is DD/MM/YYYY format
	const date = parseDate(value);
	const now = dayjs();

	// Is the date before now?
	const result = dayjs(date).isBefore(now);

	return result;
}
