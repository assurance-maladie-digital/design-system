import { calcHumanFileSize } from '../';

const sizeMax = 4096 * 1024; // 4MB

const fileSizeUnits = [
	'B',
	'KB',
	'MB',
	'GB',
	'TB'
];

describe('calcHumanFileSize', () => {
	it('returns the readable size', () => {
		expect(calcHumanFileSize(sizeMax, fileSizeUnits)).toEqual('4 MB');
	});

	it('returns the readable size with a custom text separator', () => {
		const separator = '_';

		expect(calcHumanFileSize(sizeMax, fileSizeUnits, separator)).toEqual('4_MB');
	});
});
