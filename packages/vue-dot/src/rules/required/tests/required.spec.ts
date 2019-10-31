import required, { required as requiredFn } from '../';

// Tests
describe('required', () => {
	it('returns an error when the value is falsy', () => {
		expect(typeof required('')).toBe('string');
	});

	it('returns an error when the value is an empty array', () => {
		expect(typeof required([])).toBe('string');
	});

	it('returns true when the value is filled', () => {
		expect(required('test')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = requiredFn({
			default: 'test'
		});

		expect(rule('')).toBe('test');
	});
});
