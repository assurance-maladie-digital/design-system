import minLength from '../';

// Tests
describe('minLength', () => {
	it('returns an error when the value is shorter than minimum', () => {
		const rule = minLength(10);

		expect(typeof rule('0')).toBe('string');
	});

	it('returns true when the value is longer than minimum', () => {
		const rule = minLength(10);

		expect(rule('012345678910')).toBe(true);
	});

	it('returns true if the value is falsy', () => {
		const rule = minLength(10);

		expect(rule('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = minLength(10, {
			default: 'test'
		});

		expect(rule('0')).toBe('test');
	});
});
