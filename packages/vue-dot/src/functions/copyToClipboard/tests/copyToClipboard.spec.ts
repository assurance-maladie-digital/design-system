import { copyToClipboard } from '../';

interface TSelection {
	rangeCount?: number;
	getRangeAt?: (index: number) => string | null;
	removeAllRanges?: () => null;
	addRange?: () => null;
}

// Custom document type
interface TDocument {
	getSelection: () => TSelection | null;
	execCommand: () => boolean;
}

// Override default type
declare let document: TDocument;

/** Mock functions on document */
function mockDocument(options: TSelection) {
	document.getSelection = () => {
		return options;
	};
}

const txt = 'test';
document.execCommand = jest.fn();

describe('copyToClipboard', () => {
	it('copies text to the clipboard', () => {
		mockDocument({
			rangeCount: 0,
			getRangeAt: () => null,
			removeAllRanges: () => null
		});

		const writeTextMock = jest.fn();
		Object.defineProperty(navigator, 'clipboard', {
			value: { writeText: writeTextMock },
			writable: true
		});

		copyToClipboard(txt);

		expect(writeTextMock).toHaveBeenCalledWith(txt);
		expect(document.execCommand).not.toHaveBeenCalled();
	});

	it('copies text to the clipboard when text is already selected', () => {
		mockDocument({
			rangeCount: 2,
			getRangeAt: (index: number) => ['a', 'b'][index],
			removeAllRanges: () => null,
			addRange: () => null
		});

		const writeTextMock = jest.fn();
		Object.defineProperty(navigator, 'clipboard', {
			value: { writeText: writeTextMock },
			writable: true
		});

		copyToClipboard(txt);

		expect(writeTextMock).toHaveBeenCalledWith(txt);
		expect(document.execCommand).not.toHaveBeenCalled();
	});

	it('copies text to the clipboard when text is already selected and navigator.clipboard is unavailable', () => {
		mockDocument({
			rangeCount: 2,
			getRangeAt: (index: number) => ['a', 'b'][index],
			removeAllRanges: () => null,
			addRange: () => null
		});

		Object.defineProperty(navigator, 'clipboard', {
			value: null,
			writable: true
		});

		copyToClipboard(txt);

		expect(document.execCommand).toHaveBeenCalledWith('copy');
	});

	it('does not copy when getSelection is unavailable', () => {
		document.getSelection = jest.fn(() => null);

		expect(copyToClipboard(txt)).toBeUndefined();
	});
});
