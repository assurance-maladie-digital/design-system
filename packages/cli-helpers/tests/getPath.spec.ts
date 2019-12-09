import getPath from '@/getPath';

describe('getPath', () => {
	beforeAll(() => {
		// Mock process.cwd()
		const spy = jest.spyOn(process, 'cwd');
		spy.mockReturnValue('mock/');
	});

	it('should parse the path correctly', () => {
		expect(getPath('/test')).toBe('mock/test');
	});
});
