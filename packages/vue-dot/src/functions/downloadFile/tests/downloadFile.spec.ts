import { downloadFile } from '../';

const file = new File(
	['hello world'],
	'hello_world.txt',
	{ type: 'text/plain' }
);

// Tests
describe('downloadFile', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	global.URL.createObjectURL = jest.fn();
	global.URL.revokeObjectURL = jest.fn();

	it('it downloads a file correctly', () => {
		const link = {
			click: jest.fn(),
			style: jest.fn(() => 'none')
		} as any; // TODO

		jest.spyOn(document, 'createElement').mockImplementation(() => link);
		const appendChildSpy = jest.spyOn(document.body, 'appendChild').mockImplementation();
		const removeChildSpy = jest.spyOn(document.body, 'removeChild').mockImplementation();

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
		const link = {
			click: jest.fn(),
			style : jest.fn(() => 'none')
		} as any;

		jest.spyOn(document, 'createElement').mockImplementation(() => link);
		jest.spyOn(document.body, 'appendChild').mockImplementation();
		jest.spyOn(document.body, 'removeChild').mockImplementation();

		downloadFile(file, file.name, file.type, true);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it('it downloads a file with content type BufferSource', () => {
		const buffer = new ArrayBuffer(8);
		const link = {
			click: jest.fn(),
			style: jest.fn(()=>'none')
		} as any;

		jest.spyOn(document, 'createElement').mockImplementation(() => link);
		jest.spyOn(document.body, 'appendChild').mockImplementation();
		jest.spyOn(document.body, 'removeChild').mockImplementation();

		downloadFile(buffer, file.name, file.type);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it('it downloads a file with content type String', () => {
		const link = {
			click: jest.fn(),
			style: jest.fn(()=>'none')
		} as any;

		jest.spyOn(document, 'createElement').mockImplementation(() => link);
		jest.spyOn(document.body, 'appendChild').mockImplementation();
		jest.spyOn(document.body, 'removeChild').mockImplementation();

		downloadFile('test content string', file.name, file.type);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it('it downloads a file from navigator version that contain \'.NET\'', () => {
		global.navigator.msSaveOrOpenBlob = jest.fn();
		const mockCallback = jest.fn(downloadFile);

		const originalNavigator = { ...navigator };
		const navigatorSpy = jest.spyOn(global, 'navigator', 'get');
		// TODO
		// IE10 navigator appVersion contain .NET
		navigatorSpy.mockImplementation(() => ({
			...originalNavigator,
			appVersion: 'test appVersion contain .NET'
		}));

		mockCallback(file, file.name, file.type);

		expect(navigatorSpy).toHaveBeenCalledTimes(2);

	});
});
