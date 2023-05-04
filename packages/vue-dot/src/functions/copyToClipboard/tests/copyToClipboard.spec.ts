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

		if (navigator.clipboard) {
			const writeTextSpy = jest.spyOn(navigator.clipboard, 'writeText');
			await copyToClipboard(txt);
			expect(writeTextSpy).toHaveBeenCalledWith(txt);
			expect(document.execCommand).not.toHaveBeenCalled();
		} else {
			await copyToClipboard(txt);
			expect(document.execCommand).toHaveBeenCalledWith('copy');
		}
	});

	it('does not copy when text is already selected', async() => {
		mockDocument({
			rangeCount: 2,
			getRangeAt: (index: number) => ['a', 'b'][index],
			removeAllRanges: () => null,
			addRange: () => null
		});

		if (navigator.clipboard) {
			const writeTextSpy = jest.spyOn(navigator.clipboard, 'writeText');
			await copyToClipboard(txt);
			expect(writeTextSpy).not.toHaveBeenCalled();
			expect(document.execCommand).not.toHaveBeenCalled();
		} else {
			await copyToClipboard(txt);
			expect(document.execCommand).not.toHaveBeenCalled();
		}
	});

	it('does not copy when getSelection is unavailable', async() => {
		document.getSelection = jest.fn(() => null);

		if (navigator.clipboard) {
			const writeTextSpy = jest.spyOn(navigator.clipboard, 'writeText');
			await copyToClipboard(txt);
			expect(writeTextSpy).not.toHaveBeenCalled();
			expect(document.execCommand).not.toHaveBeenCalled();
		} else {
			await copyToClipboard(txt);
			expect(document.execCommand).not.toHaveBeenCalled();
		}
	});
});
