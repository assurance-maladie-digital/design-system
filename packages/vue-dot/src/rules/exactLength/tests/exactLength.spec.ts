import { exactLength } from '../';

// Tests
describe('exactLength', () => {
	it('returns an error when the value is longer than the exact length', () => {
		const rule = exactLength(2);

		expect(typeof rule('0 1')).toBe('string');
	});

	it('returns an error when the value is smaller than the exact length', () => {
		const rule = exactLength(2);

		expect(typeof rule('s')).toBe('string');
	});

	it('returns true when the value is the exact length without counting spaces', () => {
		const rule = exactLength(2, true);

		expect(rule('x x')).toBe(true);
	});

	it('returns true when the value is equal than the exact length', () => {
		const rule = exactLength(2);

		expect(rule('01')).toBe(true);
	});

	it('returns true if the value is empty', () => {
		const rule = exactLength(10);

		expect(rule('')).toBe(true);
	});

	it('returns true if the value is null', () => {
		const rule = exactLength(10);

		expect(rule(null)).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = exactLength(1, false, {
			default: 'test'
		});

		expect(rule('01')).toBe('test');
	});
});
