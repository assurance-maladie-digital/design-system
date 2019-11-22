import { mockProcessStdout } from 'jest-mock-process';

import traceLine from '@/traceLine';

describe('traceLine', () => {
	let mockStdout: jest.SpyInstance;

	beforeEach(() => {
		mockStdout = mockProcessStdout();
	});

	it('should not render anything without columns', () => {

		traceLine();

		expect(mockStdout).toHaveBeenCalledTimes(0);
	});

	it('should render a line correctly', () => {
		process.stdout.columns = 2;

		traceLine();

		expect(mockStdout).toHaveBeenCalledTimes(2);
	});

	it('should render a line correctly with a custom color', () => {
		process.stdout.columns = 2;

		traceLine('#eee');

		expect(mockStdout).toHaveBeenCalledTimes(2);
	});

	afterAll(() => {
		mockStdout.mockRestore();
	});
});
