import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

/** Parse custom format with dayjs */
function parseDate(value: string, format = 'DD/MM/YYYY') {
	return dayjs(value, format);
}

export default parseDate;
