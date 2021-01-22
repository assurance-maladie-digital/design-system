import dayjs, { tz } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

/** Parse custom format with dayjs */
export function parseDate(value: string, format = 'DD/MM/YYYY'): dayjs.Dayjs {

	let keepLocalTime = true;
	const date = new Date();
	let tzOffset = date.getTimezoneOffset();
	if (tzOffset === 0) {
		tzOffset = 1;
	}
	if (tzOffset > 0) {
		keepLocalTime = false;
	}
	return dayjs(value, format).hour(2).utcOffset(tzOffset, keepLocalTime);
}
