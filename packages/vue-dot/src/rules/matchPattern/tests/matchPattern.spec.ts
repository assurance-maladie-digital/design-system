import { matchPattern } from '../';

describe('matchPatternFn', () => {
	it('should return true if the value is empty', () => {
		const rule = matchPattern(/^[A-Z]+$/);

		expect(rule('')).toBe(true);
	});

	it('should return true if the value matches the pattern', () => {
		const rule = matchPattern(/^[A-Z]+$/);

		expect(rule('ABC')).toBe(true);
	});

	it('should return an error if the value does not match the pattern', () => {
		const rule = matchPattern(/^[A-Z]+$/);

		expect(typeof rule('abc')).toBe('string');
	});

	it('should return a custom error message if the validation fails', () => {
		const rule = matchPattern(/^[A-Z]+$/, {
			default: 'test'
		});

		expect(rule('abc')).toBe('test');
	});

	it('should not return a custom error message if the validation fails', () => {
		const rule = matchPattern(/^[A-Z]+$/, {
			default: 'test'
		});

		expect(rule('ABC')).toBe(true);
	});
});
