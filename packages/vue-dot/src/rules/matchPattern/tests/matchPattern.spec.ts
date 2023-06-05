import { matchPattern } from '../';

describe('matchPatternFn', () => {
	it('should return true if the value is empty', () => {
		const validator = matchPattern(/^[A-Z]+$/);
		expect(validator('')).toBe(true);
	});

	it('should return true if the value matches the pattern', () => {
		const validator = matchPattern(/^[A-Z]+$/);
		expect(validator('ABC')).toBe(true);
	});

	it('should return a custom error message if the validation fails', () => {
		const errorMessages = { default: 'The value must match the pattern.' };
		const validator = matchPattern(/^[A-Z]+$/, errorMessages);
		expect(validator('abc')).toBe('The value must match the pattern.');
	});
});
