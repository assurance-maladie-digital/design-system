import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { debounce } from '../';

interface TestComponent extends Vue {
	value: string;
}

/** Create the test component (input for debounce) */
function createTestComponent(template: string, spy: jest.Mock, data?: Record<string, unknown>) {
	return Vue.component('TestComponent', {
		directives: {
			debounce
		},
		data() {
			return {
				value: 'a',
				...data
			};
		},
		watch: {
			test: spy
		},
		template
	});
}

/** Do the test with timeout */
function timeoutTest(input: HTMLInputElement, wrapper: Wrapper<TestComponent>, spy: jest.Mock) {
	jest.clearAllTimers();
	jest.useFakeTimers();

	setTimeout(() => {
		input.value = 'c';
		wrapper.trigger('input');
	}, 10);

	setTimeout(() => {
		input.value = 'd';
		wrapper.trigger('input');
	}, 20);

	jest.runAllTimers();

	setTimeout(() => {
		expect(spy).toHaveBeenCalledTimes(0);
		expect(wrapper.vm.value).toBe('a');
	}, 30);

	jest.runAllTimers();

	setTimeout(() => {
		expect(spy).toHaveBeenCalledTimes(1);
		expect(wrapper.vm.value).toBe('d');
	}, 100);
}

describe('debounce', () => {
	it('works correctly with a simple input', () => {
		const spy = jest.fn();

		const testComponent = createTestComponent(
			'<input v-model="value" v-debounce>',
			spy
		);

		const wrapper = mount(testComponent);

		const input = wrapper.find('input') as unknown as HTMLInputElement;

		input.value = 'b';

		wrapper.trigger('input');

		timeoutTest(input, wrapper, spy);
	});

	it('works correctly if not directly binded to an input (eg. VTextField)', () => {
		const spy = jest.fn();

		const testComponent = createTestComponent(
			'<div v-debounce="e => value = e"><input :value="value" /></div>',
			spy
		);

		const wrapper = mount(testComponent);

		const input = wrapper.find('input') as unknown as HTMLInputElement;

		input.value = 'b';

		wrapper.trigger('input');

		timeoutTest(input, wrapper, spy);
	});

	it('works correctly if the binding is a function', () => {
		const spy = jest.fn();

		const testComponent = createTestComponent(
			'<input v-debounce="e => value = e" :value="value" />',
			spy
		);

		const wrapper = mount(testComponent);

		const input = wrapper.find('input') as unknown as HTMLInputElement;

		input.value = 'b';

		wrapper.trigger('input');

		timeoutTest(input, wrapper, spy);
	});

	it('works correctly if a different delay is provided', () => {
		const spy = jest.fn();

		const testComponent = createTestComponent(
			'<input v-debounce.1000="e => value = e" :value="value" />',
			spy
		);

		const wrapper = mount(testComponent);

		const input = wrapper.find('input') as unknown as HTMLInputElement;

		input.value = 'b';

		wrapper.trigger('input');

		timeoutTest(input, wrapper, spy);
	});
});
