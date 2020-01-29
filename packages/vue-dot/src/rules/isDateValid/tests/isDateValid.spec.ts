import dayjs from 'dayjs';

import { isDateValid, isDateValidFn } from '../';

const DATE_FORMAT = 'DD/MM/YYYY';

const validDate = dayjs().format(DATE_FORMAT);
const invalidDate = '99/99/9999';

// Tests
describe('isDateValid', () => {
	it('returns an error when the date isn\'t valid', () => {
		expect(typeof isDateValid(invalidDate)).toBe('string');
	});

	it('returns an error when the day doesn\'t match the month dayjs', () => {
		const date = '31/11/2019'; // Only 30 dayjs in November

		expect(typeof isDateValid(date)).toBe('string');
	});

	it('returns an error when it\'s february (not leap year) and the day doesn\'t match the month dayjs', () => {
		const date = '29/02/2019'; // Not a leap year, only 28 days

		expect(typeof isDateValid(date)).toBe('string');
	});

	it('returns an error when it\'s february (leap year) and the day doesn\'t match the month dayjs', () => {
		const date = '30/02/2020'; // Leap year, 29 days

		expect(typeof isDateValid(date)).toBe('string');
	});

	it('returns true when it\'s february and the date is valid', () => {
		const date = '15/02/2019';

		expect(isDateValid(date)).toBe(true);
	});

	it('returns true when the date is valid', () => {
		expect(isDateValid(validDate)).toBe(true);
	});

	it('returns true if the value is falsy', () => {
		expect(isDateValid('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = isDateValidFn({
			default: 'test'
		});

		expect(rule(invalidDate)).toBe('test');
	});
});
