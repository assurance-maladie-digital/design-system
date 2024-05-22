import { isDateValid, isDateValidFn } from '../';
import { describe, it, expect } from 'vitest';

const validDate = '14/09/2019';
const invalidDate = '99/99/9999';

describe('isDateValid', () => {
	it('returns an error when the date is not valid', () => {
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
