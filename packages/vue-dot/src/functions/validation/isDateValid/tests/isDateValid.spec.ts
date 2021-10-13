import { isDateValid } from '../';

// Tests
describe('isDateValid', () => {
	it('returns an error when the date is not valid', () => {
		const date = '99/99/9999';

		expect(typeof isDateValid(date)).toBe('string');
	});

	it('returns an error when the format is invalid', () => {
		const date = '2020-04-16';

		expect(typeof isDateValid(date)).toBe('string');
	});

	it('returns an error when the day does not match the month', () => {
		const date = '31/11/2019'; // Only 30 days in November

		expect(typeof isDateValid(date)).toBe('string');
	});

	it('returns an error when it is february (not leap year) and the day does not match the month', () => {
		const date = '29/02/2019'; // Not a leap year, only 28 days

		expect(typeof isDateValid(date)).toBe('string');
	});

	it('returns an error when it is february (leap year) and the day does not match the month', () => {
		const date = '30/02/2020'; // Leap year, 29 days

		expect(typeof isDateValid(date)).toBe('string');
	});

	it('returns true when it is february and the date is valid', () => {
		const date = '15/02/2019';

		expect(isDateValid(date)).toBe(true);
	});

	it('returns true when the date is valid', () => {
		const date = '14/09/2019';

		expect(isDateValid(date)).toBe(true);
	});
});
