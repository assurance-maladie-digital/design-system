import { maxLength } from '../';

describe('maxLength', () => {
	it('returns an error when the value is longer than maximum', () => {
		const rule = maxLength(1);

		expect(typeof rule('0123')).toBe('string');
	});

	it('returns true when the value is shorter than maximum', () => {
		const rule = maxLength(10);

		expect(rule('012345')).toBe(true);
	});

	it('returns true when the value equals the maximum', () => {
		const rule = maxLength(10);

		expect(rule('0123456789')).toBe(true);
	});

	it('returns true if the value is falsy', () => {
		const rule = maxLength(10);

		expect(rule('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = maxLength(1, {
			default: 'test'
		});

		expect(rule('0123')).toBe('test');
	});
});
