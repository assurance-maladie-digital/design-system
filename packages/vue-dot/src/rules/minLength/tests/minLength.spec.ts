import { minLength } from '../';

describe('minLength', () => {
	it('returns an error when the value is shorter than minimum', () => {
		const rule = minLength(10);

		expect(typeof rule('0')).toBe('string');
	});

	it('returns true when the value is longer than minimum', () => {
		const rule = minLength(10);

		expect(rule('012345678910')).toBe(true);
	});

	it('returns true when the value equals the maximum', () => {
		const rule = minLength(10);

		expect(rule('0123456789')).toBe(true);
	});


	it('returns true when the value is longer than the maximum without counting spaces', () => {
		const rule = minLength(10, true);

		expect(rule('0 1 2 3 4 5 6 7 8 9 10')).toBe(true);
	});
	it('returns true if the value is falsy', () => {
		const rule = minLength(10);

		expect(rule('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = minLength(10, false, {
			default: 'test'
		});

		expect(rule('0')).toBe('test');
	});
});
