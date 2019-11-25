import match from '..';

// Tests
describe('match the regex', () => {
	const rule = match(/[0-9]+/);

	it('returns an error when the value does not match the regex', () => {

		expect(typeof rule('a')).toBe('string');
	});

	it('returns true  the value does match the regex', () => {
		expect(rule('01')).toBe(true);
	});

	it('returns true  the value is empty', () => {
		expect(rule('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule2 = match(/[0-9]+/, {
			default: 'test custom bad regex'
		});

		expect(rule2('a')).toBe('test custom bad regex');
	});
});
