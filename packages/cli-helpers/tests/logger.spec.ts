import { mockConsoleLog } from 'jest-mock-process';

import {
	cmd,
	info,
	done,
	warn,
	error,
	verbose,
	event
} from '@/logger';

describe('logger', () => {
	let mockLog: jest.SpyInstance;

	beforeEach(() => {
		mockLog = mockConsoleLog();
	});

	it('should call cmd correctly', () => {
		cmd('test');

		expect(mockLog).toHaveBeenCalled();
	});

	it('should call info correctly', () => {
		info('test');

		expect(mockLog).toHaveBeenCalled();
	});

	it('should call done correctly', () => {
		done('test');

		expect(mockLog).toHaveBeenCalled();
	});

	it('should call warn correctly', () => {
		warn('test');

		expect(mockLog).toHaveBeenCalled();
	});

	it('should call error correctly', () => {
		error('test');

		expect(mockLog).toHaveBeenCalled();
	});

	it('should call verbose correctly', () => {
		verbose('test');

		expect(mockLog).toHaveBeenCalled();
	});

	it('should call event correctly', () => {
		event('test');

		expect(mockLog).toHaveBeenCalled();
	});

	afterAll(() => {
		mockLog.mockRestore();
	});
});
