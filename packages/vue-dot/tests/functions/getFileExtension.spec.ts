import getFileExtension from '../../src/functions/getFileExtension';

// Tests
describe('getFileExtension', () => {
	it('returns the extension of a file name', () => {
		const filename = 'test.pdf';

		expect(getFileExtension(filename)).toEqual('pdf');
	});
});
