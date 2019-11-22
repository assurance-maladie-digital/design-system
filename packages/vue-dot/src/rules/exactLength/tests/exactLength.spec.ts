import exactLength from '..';

// Tests
describe('exactLength', () => {
	it('returns an error when the value is shorter than length', () => {
		const rule = exactLength(2);

		expect(typeof rule('0')).toBe('string');
	});

	it('returns an error when the value is longer than length', () => {
		const rule = exactLength(2);

		expect(typeof rule('012')).toBe('string');
	});

	it('returns true if the value is longer equal than length', () => {
		const rule = exactLength(2);

		expect(rule('01')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = exactLength(10, {
			default: 'test 10 caractères'
		});

		expect(rule('0')).toBe('test 10 caractères');
	});
});
