import containsAll from '..';

// Tests
describe('contains all', () => {
	const rule = containsAll(['!', '\\', '1', 'a']);
	const rule2 = containsAll([]);
	const rule3 = containsAll(['!', '\\', '1', 'a'], {
		default: 'test custom error message'
	});

	it('returns an error when text does not include all', () => {
		expect(typeof rule('a1\\')).toBe('string');
		expect(rule('a1\\')).toBe('Doit contenir => !, \\, 1, a');
	});

	it('returns true when text include all', () => {
		expect(rule('a1\\!')).toBe(true);
	});

	it('returns true if all extension accepted []', () => {
		expect(rule2('test')).toBe(true);
	});

	it('works with custom error messages', () => {
		expect(rule3('a1\\')).toBe('test custom error message');
	});
});
