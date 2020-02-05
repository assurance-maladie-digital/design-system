import { mockConsoleLog } from 'jest-mock-process';

import { renderHeader } from '@/renderHeader';

describe('renderHeader', () => {
	let mockLog: jest.SpyInstance;

	beforeEach(() => {
		mockLog = mockConsoleLog();
	});

	it('should render the header correctly', () => {
		renderHeader('test');

		expect(mockLog).toHaveBeenCalled();
	});

	it('should render the header correctly with an author', () => {
		renderHeader('test', 'author');

		expect(mockLog).toHaveBeenCalled();
	});

	it('should render the header correctly with a version', () => {
		renderHeader('test', undefined, '1.0.0');

		expect(mockLog).toHaveBeenCalled();
	});

	afterAll(() => {
		mockLog.mockRestore();
	});
});
