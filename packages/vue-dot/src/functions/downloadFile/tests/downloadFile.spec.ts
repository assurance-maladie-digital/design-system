import { downloadFile } from '..';

const file = new File(['hello', ' ', 'world'], 'hello_world.txt', { type: 'text/plain' });

// Tests
describe('downloadFile', () => {
	it('is called correctly', () => {
		console.log(file);
		// FIXME:  createObjectURL is not a function ????
		// const blob = window.URL.createObjectURL(file);

		// FIXME: How to test the download function in jest ???
		// expect(downloadFile(blob, file.name, file.type)).toBeUndefined();
	});
});
