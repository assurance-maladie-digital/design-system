import { fileMaxSize, fileMaxSizeMessage } from '..';

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

	it('returns the information message with the maximum size caculated for human', () => {
		const message = fileMaxSizeMessage(1);

		expect(typeof message).toBe('string');
	});

	it('returns custom information messages', () => {
		const message = fileMaxSizeMessage(1, {
			default: 'test custom information message'
		});

		expect(message).toBe('test custom information message');
	});
});
