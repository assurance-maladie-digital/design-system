import parseDate from '../';

import dayjs from 'dayjs';

const RESULT_DATE_FORMAT = 'YYYY-MM-DD';

// Tests
describe('parseDate', () => {
	it('returns a working dayjs instance', () => {
		const date = dayjs().format('DD/MM/YYYY');
		const parsedDate = dayjs().format(RESULT_DATE_FORMAT);

		expect(parseDate(date).format(RESULT_DATE_FORMAT)).toBe(parsedDate);
	});

	it('returns a working dayjs instance with custom date format', () => {
		const DATE_FORMAT = 'DD MM YYYY';

		const date = dayjs().format(DATE_FORMAT);
		const parsedDate = dayjs().format(RESULT_DATE_FORMAT);

		expect(parseDate(date, DATE_FORMAT).format(RESULT_DATE_FORMAT)).toBe(parsedDate);
	});
});
