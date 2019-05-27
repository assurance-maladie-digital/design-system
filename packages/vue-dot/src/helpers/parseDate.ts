import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

/** Parse custom format with dayjs */
function parseDate(value: string) {
	return dayjs(value, 'DD/MM/YYYY');
}

export default parseDate;
