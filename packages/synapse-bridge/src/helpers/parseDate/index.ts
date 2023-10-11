import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

/** Parse a date with dayjs */
export function parseDate(value: string, format = 'DD/MM/YYYY'): dayjs.Dayjs {
	// Currently dayjs doesn't work well with timezone offsets and parsing
	// To fix this, we set the hour based on timezone offset
	// so we don't go back or forward multiple hours

	/** Timezone offset in minutes */
	const timezoneOffset = (new Date()).getTimezoneOffset();

	let offset = '00';

	if (timezoneOffset > 0) {
		offset = '14';
	} else {
		offset = '04';
	}

	const dateWithTime = `${value} ${offset}:00:00`;
	const formatWithTime = `${format} HH:mm:ss`;

	return dayjs(dateWithTime, formatWithTime, true);
}
