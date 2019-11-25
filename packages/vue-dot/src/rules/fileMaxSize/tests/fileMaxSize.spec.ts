import fileMaxSize from '..';

// Tests
describe('fileMaxSize', () => {
	const file = new File(['fo'], 'foo.txt', {
		type: 'text/plain'
	});

	it('returns an error when the size is more than maximum size (bits)', () => {
		const rule = fileMaxSize(1);

		expect(typeof rule(file)).toBe('string');
	});

	it('returns true if no file', () => {
		const rule = fileMaxSize(1);
		expect(rule(undefined)).toBe(true);
	});

	it('returns true when the size is shorter or equal than maximum size (bits)', () => {
		const rule = fileMaxSize(3);

		expect(rule(file)).toBe(true);
	});

	it('returns custom error messages', () => {
		const rule = fileMaxSize(1, {
			default: 'test custom error message'
		});

		expect(rule(file)).toBe('test custom error message');
	});
});
