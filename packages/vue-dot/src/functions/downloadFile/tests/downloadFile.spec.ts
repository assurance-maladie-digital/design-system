import { downloadFile } from '..';

const file = new File(['hello', ' ', 'world'], 'hello_world.txt', { type: 'text/plain' });

// Tests
describe('downloadFile', () => {
	global.URL.createObjectURL = jest.fn();
	global.URL.revokeObjectURL = jest.fn();
	it('is called correctly', () => {
		const link: any = {
			download: String,
			href: String,
			click: jest.fn(),
			style: {}
		};
		const mockCallback = jest.fn(downloadFile);
		const linkSpy = jest.spyOn(document, 'createElement').mockImplementation(() => link);

		const windowSpy = jest.spyOn(global, 'window', 'get');
		const DocumentSpy = jest.spyOn(global, 'document', 'get');
		windowSpy.mockImplementation((): any => ({
			body: {
				appendChild: link
			}
		}));
		// windowSpy.mockImplementation((): any => ({
		// 	location: {
		// 		replace: mockCallback
		// 	}
		// }));

		mockCallback('test_content', file.name, file.type);

		// expect(mockCallback.mock.calls.length).toBe(1);
		expect(windowSpy).toHaveBeenCalledTimes(2);
		expect(DocumentSpy).toHaveBeenCalledTimes(2);
		expect(linkSpy).toHaveBeenCalledTimes(2);
		// expect(link.download).toEqual(file.name);
		// expect(link.href).toEqual('test_content');
		// expect(link.click).toHaveBeenCalledTimes(1);
	});
});
