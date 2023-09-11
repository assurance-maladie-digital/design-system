import { test, mock } from "vitest";
import { copyToClipboard } from "../";

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

	document.execCommand = mock();
}

const txt = "test";

test("copyToClipboard - copies text to the clipboard", () => {
	mockDocument({
		rangeCount: 0,
		getRangeAt: () => null,
		removeAllRanges: () => null,
	});

	const writeTextMock = mock();

	Object.defineProperty(navigator, "clipboard", {
		value: {
			writeText: writeTextMock,
		},
		writable: true,
	});

	copyToClipboard(txt);

	expect(writeTextMock).toHaveBeenCalledWith(txt);
	expect(document.execCommand).not.toHaveBeenCalled();
});

test("copyToClipboard - copies text to the clipboard when text is already selected", () => {
	mockDocument({
		rangeCount: 2,
		getRangeAt: (index: number) => ["a", "b"][index],
		removeAllRanges: () => null,
		addRange: () => null,
	});

	const writeTextMock = mock();

	Object.defineProperty(navigator, "clipboard", {
		value: {
			writeText: writeTextMock,
		},
		writable: true,
	});

	copyToClipboard(txt);

	expect(writeTextMock).toHaveBeenCalledWith(txt);
	expect(document.execCommand).not.toHaveBeenCalled();
});

test("copyToClipboard - copies text to the clipboard when text is already selected and navigator.clipboard is unavailable", () => {
	mockDocument({
		rangeCount: 2,
		getRangeAt: (index: number) => ["a", "b"][index],
		removeAllRanges: () => null,
		addRange: () => null,
	});

	Object.defineProperty(navigator, "clipboard", {
		value: null,
		writable: true,
	});

	copyToClipboard(txt);

	expect(document.execCommand).toHaveBeenCalledWith("copy");
});

test("copyToClipboard - does not copy text when getSelection is unavailable", () => {
	document.getSelection = mock(() => null);

	expect(copyToClipboard(txt)).toBeUndefined();
});
