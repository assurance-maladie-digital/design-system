import notContains from '..';

// Tests
describe('not contains some', () => {
	const rule = notContains(['!', '\\', '1', 'a']);
	const rule2 = notContains([]);
	const rule3 = notContains(['!', '\\', '1', 'a'], {
		default: 'test custom error message'
	});
	const text = 'a?/2';

	it('returns an error when text does include some', () => {
		expect(typeof rule(text)).toBe('string');
		expect(rule(text)).toBe('Ne doit pas contenir => !, \\, 1, a');
	});

	it('returns true when text not include some', () => {
		expect(rule('b2')).toBe(true);
	});

	it('returns true if all accepted []', () => {
		expect(rule2('1test')).toBe(true);
	});

	it('works with custom error messages', () => {
		expect(rule3(text)).toBe('test custom error message');
	});
});
