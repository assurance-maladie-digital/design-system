import { exactLength } from '..';

// Tests
describe('exactLength', () => {
	it('returns an error when the value is longer than the exact length', () => {
		const rule = exactLength(1);

		expect(typeof rule('01')).toBe('string');
	});

	it('returns an error when the value is smaller than the exact length', () => {
		const rule = exactLength(2);

		expect(typeof rule('s')).toBe('string');
	});

	it('returns true when the value is equal than the exact length', () => {
		const rule = exactLength(2);

		expect(rule('01')).toBe(true);
	});

	it('returns true if the value is falsy', () => {
		const rule = exactLength(10);

		expect(rule('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = exactLength(1, {
			default: 'test'
		});

		expect(rule('01')).toBe('test');
	});
});
