import { getFilenameFromHeader } from '../';

const filename = 'name.ext';
const fallback = 'fallback.ext';

const testHeader = `inline; filename=${filename}; other`;
const testHeaderWithQuotes = `inline; filename="${filename}"; other`;

// Tests
describe('getFilenameFromHeader', () => {
	it('extracts a filename from a Content-Disposition header', () => {
		expect(getFilenameFromHeader(testHeader)).toEqual(filename);
	});

	it('extracts a filename from a header and remove any quotes', () => {
		expect(getFilenameFromHeader(testHeaderWithQuotes)).toEqual(filename);
	});

	it('doesn\'t fail if the header is missing', () => {
		expect(getFilenameFromHeader('')).toEqual('');
	});

	it('fallbacks to a specified name if the filename couldn\'t be determined', () => {
		expect(getFilenameFromHeader('inline;', fallback)).toEqual(fallback);
	});

	it('returns an empty string if the filename couldn\'t be determined and no fallback was provided', () => {
		expect(getFilenameFromHeader('inline;')).toEqual('');
	});
});
