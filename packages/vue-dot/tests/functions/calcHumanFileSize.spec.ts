import calcHumanFileSize from '../../src/functions/calcHumanFileSize';

const sizeMax = 4096 * 1024; // Default 4MB

const fileSizeUnits = [
	'B',
	'KB',
	'MB',
	'GB',
	'TB'
];

// Tests
describe('calcHumanFileSize', () => {
	it('returns the extension of a file name', () => {
		expect(calcHumanFileSize(sizeMax, fileSizeUnits)).toEqual('4 MB');
	});

	it('works with a custom text separator', () => {
		const separator = '_';

		expect(calcHumanFileSize(sizeMax, fileSizeUnits, separator)).toEqual('4_MB');
	});
});
