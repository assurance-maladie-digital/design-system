import debounce from '../';

// Tell jest to mock all timeout functions
jest.useFakeTimers();

describe('debounce', () => {
	let func: jest.Mock;
	let debouncedFunc: () => any;

	beforeEach(() => {
		func = jest.fn();
	});

	it('executes just once', () => {
		debouncedFunc = debounce(func, 1000);

		for (let i = 0; i < 100; i++) {
			debouncedFunc();
		}

		// Fast-forward time
		jest.runAllTimers();

		expect(func).toBeCalledTimes(1);
	});

	it('executes just once with default delay', () => {
		debouncedFunc = debounce(func);

		for (let i = 0; i < 100; i++) {
			debouncedFunc();
		}

		// Fast-forward time
		jest.runAllTimers();

		expect(func).toBeCalledTimes(1);
	});
});
