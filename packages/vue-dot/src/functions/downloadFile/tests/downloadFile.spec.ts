import { downloadFile } from '..';

const file = new File(['hello world'], 'hello_world.txt', { type: 'text/plain' });

// Tests
describe('downloadFile', () => {
	global.URL.createObjectURL = jest.fn();
	global.URL.revokeObjectURL = jest.fn();
	it('Navigateur version .NET correctly', () => {
		Object.defineProperty(global.navigator, 'appVersion', '.NET');
		const mockCallback = jest.fn(downloadFile);

		const msSaveOrOpenBlobSpy = jest.spyOn(window.navigator, 'msSaveOrOpenBlob');

		mockCallback('test_content', file.name, file.type);

		expect(msSaveOrOpenBlobSpy).toHaveBeenCalledTimes(1);

	});

	it('is called correctly', () => {
		const mockCallback = jest.fn(downloadFile);

		const windowSpy = jest.spyOn(global, 'window', 'get');
		const appendChilSpy = jest.spyOn(document.body, 'appendChild');
		const removeChildSpy = jest.spyOn(document.body, 'removeChild');
		const DocumentSpy = jest.spyOn(global, 'document', 'get');

		mockCallback('test_content', file.name, file.type);
		expect(windowSpy).toHaveBeenCalledTimes(2);
		expect(DocumentSpy).toHaveBeenCalledTimes(3);
		expect(appendChilSpy).toHaveBeenCalledTimes(1);
		expect(removeChildSpy).toHaveBeenCalledTimes(1);

		expect(mockCallback).toHaveBeenCalled();
		expect(mockCallback.mock.calls.length).toEqual(1);

		// const link: any = {
		// 	download: String,
		// 	href: String,
		// 	click: jest.fn(),
		// 	style: {},
		// 	target: String
		// };
		// jest.spyOn(document, 'createElement').mockImplementation(() => link);
		// expect(link.download).toEqual(file.name);
		// expect(link.href).toEqual('test_content');
		// expect(link.click).toHaveBeenCalledTimes(1);
	});
});
