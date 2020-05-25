import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

/** Parse custom format with dayjs */
export function parseDate(value: string, format = 'DD/MM/YYYY'): dayjs.Dayjs {
	return dayjs(value, format);
}
