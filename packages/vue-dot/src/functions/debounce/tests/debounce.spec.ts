import { debounce } from '../';

jest.useFakeTimers();

describe('debounce', () => {
	let func: jest.Mock;
	let debouncedFunc: () => void;

	beforeEach(() => {
		func = jest.fn();
	});

	it('executes just once', () => {
		debouncedFunc = debounce(func, 1000);

		for (let i = 0; i < 100; i++) {
			debouncedFunc();
		}

		jest.runAllTimers();

		expect(func).toBeCalledTimes(1);
	});

	it('executes just once with default delay', () => {
		debouncedFunc = debounce(func);

		for (let i = 0; i < 100; i++) {
			debouncedFunc();
		}

		jest.runAllTimers();

		expect(func).toBeCalledTimes(1);
	});
});
