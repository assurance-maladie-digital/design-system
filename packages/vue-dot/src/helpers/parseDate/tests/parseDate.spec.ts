import dayjs from 'dayjs';

import { parseDate } from '../';

const RESULT_DATE_FORMAT = 'YYYY-MM-DD';

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

	it('returns a working dayjs instance with a positive timezone offset', () => {
		const date = dayjs().format('DD/MM/YYYY');
		const parsedDate = dayjs().format(RESULT_DATE_FORMAT);

		// Mock getTimezoneOffset
		const getTimezoneOffset = Date.prototype.getTimezoneOffset;
		Date.prototype.getTimezoneOffset = () => 160;

		expect(parseDate(date).format(RESULT_DATE_FORMAT)).toBe(parsedDate);

		// Restore getTimezoneOffset to it's original version
		Date.prototype.getTimezoneOffset = getTimezoneOffset;
	});

	it('returns a working dayjs instance with a neutral timezone offset', () => {
		const date = dayjs().format('DD/MM/YYYY');
		const parsedDate = dayjs().format(RESULT_DATE_FORMAT);

		// Mock getTimezoneOffset
		const getTimezoneOffset = Date.prototype.getTimezoneOffset;
		Date.prototype.getTimezoneOffset = () => 0;

		expect(parseDate(date).format(RESULT_DATE_FORMAT)).toBe(parsedDate);

		// Restore getTimezoneOffset to it's original version
		Date.prototype.getTimezoneOffset = getTimezoneOffset;
	});
});
