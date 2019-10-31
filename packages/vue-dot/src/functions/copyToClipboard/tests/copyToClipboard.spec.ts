import copyToClipboard from '../';

interface TSelection {
	rangeCount?: number;
	getRangeAt?: (index: number) => string;
	removeAllRanges?: () => null;
	addRange?: () => null;
}

// Custom document type
interface TDocument {
	getSelection: () => TSelection | null;
	execCommand: () => boolean;
}

// Override default type
declare var document: TDocument;

/** Mock functions on document */
function mockDocument(options: object) {
	document.getSelection = () => {
		return options;
	};

	document.execCommand = () => true;
}

const txt = 'test';

// Tests
describe('copyToClipboard', () => {
	it('is called correctly', () => {
		mockDocument({
			rangeCount: 0,
			getRangeAt: () => null,
			removeAllRanges: () => null
		});

		expect(copyToClipboard(txt)).toBe(undefined);
	});

	it('is called correctly when text is already selected', () => {
		mockDocument({
			rangeCount: 2,
			getRangeAt: (index: number) => ['a', 'b'][index],
			removeAllRanges: () => null,
			addRange: () => null
		});

		expect(copyToClipboard(txt)).toBe(undefined);
	});

	it('is called correctly when getSelection is unavailable', () => {
		document.getSelection = jest.fn(() => null);

		expect(copyToClipboard(txt)).toBe(undefined);
	});
});
