import { downloadFile } from '../';

const file = new File(
	['attestation.txt'],
	'attestation.txt',
	{ type: 'text/plain' }
);

describe('downloadFile', () => {
	let link: HTMLAnchorElement;
	let appendChildSpy: jest.SpyInstance;
	let removeChildSpy: jest.SpyInstance;

	beforeEach(() => {
		link = {
			style: {},
			click: jest.fn()
		} as unknown as HTMLAnchorElement;

		jest.spyOn(document, 'createElement').mockImplementation(() => link);

		appendChildSpy = jest.spyOn(document.body, 'appendChild').mockImplementation();
		removeChildSpy = jest.spyOn(document.body, 'removeChild').mockImplementation();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	global.URL.createObjectURL = jest.fn();
	global.URL.revokeObjectURL = jest.fn();

	it('it downloads a file', () => {
		downloadFile(file, file.name, file.type);

		expect(appendChildSpy).toHaveBeenCalledTimes(1);
		expect(removeChildSpy).toHaveBeenCalledTimes(1);
		expect(link.rel).toEqual('noopener noreferrer');
		expect(link.target).toEqual('_blank');
		expect(link.download).toEqual(file.name);
		expect(link.style.display).toEqual('none');
		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it('it downloads a file with utf8Bom', () => {
		downloadFile(file, file.name, file.type, true);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it('it downloads a file with content type BufferSource', () => {
		const buffer = new ArrayBuffer(8);

		downloadFile(buffer, file.name, file.type);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it('it downloads a file with content type String', () => {
		downloadFile('test', file.name, file.type);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it('it downloads a file on Internet Explorer', () => {
		window.navigator.msSaveOrOpenBlob = jest.fn(() => true);
		const navigatorSpy = jest.spyOn(global, 'navigator', 'get');

		downloadFile(file, file.name, file.type);

		expect(navigatorSpy).toHaveBeenCalledTimes(2);
	});
});
