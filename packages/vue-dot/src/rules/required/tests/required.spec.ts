import { required, requiredFn } from '../';

describe('required', () => {
	it('returns an error when the value is falsy', () => {
		expect(typeof required('')).toBe('string');
	});

	it('returns an error when the value is an empty array', () => {
		expect(typeof required([])).toBe('string');
	});

	it('returns an error when the value is filled with spaces', () => {
		expect(typeof required('  ')).toBe('string');
	});

	it('returns an error when the value is null', () => {
		expect(typeof required(null)).toBe('string');
	});

	it('returns true when the value is filled with a string', () => {
		expect(required('test')).toBe(true);
	});

	it('returns true when the value is filled with an array of string', () => {
		expect(required(['test'])).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = requiredFn({
			default: 'test'
		});

		expect(rule('')).toBe('test');
	});
});
