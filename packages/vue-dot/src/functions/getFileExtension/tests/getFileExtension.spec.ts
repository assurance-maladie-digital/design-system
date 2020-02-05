import { getFileExtension } from '../';

// Tests
describe('getFileExtension', () => {
	it('returns the extension of a file', () => {
		const filename = 'test.pdf';

		expect(getFileExtension(filename)).toEqual('pdf');
	});
});
