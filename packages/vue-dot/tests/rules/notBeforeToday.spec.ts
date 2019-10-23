import notBeforeToday, { notBeforeToday as notBeforeTodayFn } from '../../src/rules/notBeforeToday';

import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YYYY';

const pastDate = dayjs().subtract(1, 'year').format(DATE_FORMAT);
const futureDate = dayjs().add(1, 'year').format(DATE_FORMAT);

// Tests
describe('notBeforeToday', () => {
	it('returns an error when the date is past', () => {
		expect(typeof notBeforeToday(pastDate)).toBe('string');
	});

	it('returns true when the date is future', () => {
		expect(notBeforeToday(futureDate)).toBe(true);
	});

	it('returns true if the value is falsy', () => {
		expect(notBeforeToday('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = notBeforeTodayFn({
			default: 'test'
		});

		expect(rule(pastDate)).toBe('test');
	});
});
