import copyToClipboard from '../../src/functions/copyToClipboard';

/** Mock functions on document */
function mockDocument(options: object) {
	(document as TDocument).getSelection = () => {
		return options;
	};

	(document as TDocument).execCommand = () => true;
}

interface TDocument extends Document {
	getSelection: () => any;
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

		expect(copyToClipboard(txt)).toEqual(undefined);
	});

	it('is called correctly when text is already selected', () => {
		mockDocument({
			rangeCount: 2,
			getRangeAt: (at: number) => ['a', 'b'][at],
			removeAllRanges: () => null,
			addRange: () => null
		});

		expect(copyToClipboard(txt)).toEqual(undefined);
	});

	it('is called correctly when getSelection is unavailable', () => {
		(document as TDocument).getSelection = jest.fn(() => null);

		expect(copyToClipboard(txt)).toEqual(undefined);
	});
});
