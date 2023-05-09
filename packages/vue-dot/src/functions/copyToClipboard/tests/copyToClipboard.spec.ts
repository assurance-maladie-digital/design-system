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
	it('copies text to the clipboard', async() => {
		mockDocument({
			rangeCount: 0,
			getRangeAt: () => null,
			removeAllRanges: () => null
		});

		try {
			await copyToClipboard(txt);
			if (navigator.clipboard) {
				const writeTextSpy = jest.spyOn(navigator.clipboard, 'writeText');
				expect(writeTextSpy).toHaveBeenCalledWith(txt);
				expect(document.execCommand).not.toHaveBeenCalled();
			} else {
				expect(document.execCommand).toHaveBeenCalledWith('copy');
			}
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it('copy txt when text is already selected', async() => {
		mockDocument({
			rangeCount: 2,
			getRangeAt: (index: number) => ['a', 'b'][index],
			removeAllRanges: () => null,
			addRange: () => null
		});

		try {
			await copyToClipboard(txt);
			if (navigator.clipboard) {
				const writeTextSpy = jest.spyOn(navigator.clipboard, 'writeText');
				expect(writeTextSpy).toHaveBeenCalledWith(txt);
				expect(document.execCommand).not.toHaveBeenCalled();
			} else {
				expect(document.execCommand).toHaveBeenCalledWith('copy');
			}
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it('does not copy when getSelection is unavailable', async() => {
		document.getSelection = jest.fn(() => null);

		try {
			await copyToClipboard(txt);
			expect(document.execCommand).not.toHaveBeenCalled();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});
});
