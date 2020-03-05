import { fileAccept, fileAcceptMessage } from '..';

// Tests
describe('fileAccept', () => {
	const file = new File(['fo'], 'foo.txt', {
		type: 'text/plain'
	});

	it('returns an error when the extension is not accepted', () => {
		const rule = fileAccept(['.csv']);

		expect(typeof rule(file)).toBe('string');
	});

	it('returns true when the extension is accepted', () => {
		const rule = fileAccept(['txt']);

		expect(rule(file)).toBe(true);
	});

	it('returns true if all extension accepted []', () => {
		const rule = fileAccept([]);

		expect(rule(file)).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = fileAccept(['.csv'], {
			default: 'test custom error message'
		});

		expect(rule(file)).toBe('test custom error message');
	});

	it('returns the default message', () => {
		const message = fileAcceptMessage(['.csv']);

		expect(typeof message).toBe('string');
	});

	it('works with custom messages', () => {
		const message = fileAcceptMessage(['.csv'], {
			default: 'test custom message'
		});

		expect(message).toBe('test custom message');
	});
});
