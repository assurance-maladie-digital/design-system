import { downloadFile } from '..';

const file = new File(['hello', ' ', 'world'], 'hello_world.txt', { type: 'text/plain' });

// Tests
describe('downloadFile', () => {
	it('is called correctly', () => {
		const link = {
			download: String,
			href: String,
			click: jest.fn(),
			style: {}
		};
		jest.spyOn(document, 'createElement').mockImplementation(() => link);

		downloadFile('test_content', file.name, file.type);

		expect(link.download).toEqual(file.name);
		expect(link.href).toEqual('test_content');
		expect(link.click).toHaveBeenCalledTimes(1);

		// FIXME:  createObjectURL is not a function ????
		const blob = URL.createObjectURL(file);

		// FIXME: How to test the download function in jest ???
		expect(downloadFile(blob, file.name, file.type)).toBeUndefined();
	});
});
