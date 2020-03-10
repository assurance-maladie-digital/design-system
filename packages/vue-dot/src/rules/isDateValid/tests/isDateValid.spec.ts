import { isDateValid, isDateValidFn } from '../';

const validDate = '14/09/2019';
const invalidDate = '99/99/9999';

// Tests
describe('isDateValid', () => {
	it('returns an error when the date isn\'t valid', () => {
		expect(typeof isDateValid(invalidDate)).toBe('string');
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
