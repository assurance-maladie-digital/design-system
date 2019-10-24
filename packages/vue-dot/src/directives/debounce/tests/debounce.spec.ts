import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import debounce from '../';

interface TestComponent extends Vue {
	value: string;
}

/** Create the test component */
function createTestComponent(template: string, spy: jest.Mock, data?: object) {
	return Vue.component('test', {
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

// Tests
describe('debounce', () => {
	it('works correctly with a simple input', () => {
		const spy = jest.fn();

		const testComponent = createTestComponent(
			'<input v-model="value" v-debounce="100">',
			spy
		);

		const wrapper = mount(testComponent);

		const input = wrapper.find('input') as unknown as HTMLInputElement;

		input.value = 'b';

		wrapper.trigger('input');

		timeoutTest(input, wrapper, spy);
	});

	it('works correctly if binded to an element and the input is inside (eg. VTextField)', () => {
		const spy = jest.fn();

		const testComponent = createTestComponent(
			'<div v-debounce.1000="e => value = e"><input :value="value" /></div>',
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
			'<input v-debounce.1000="e => value = e" :value="value" />',
			spy
		);

		const wrapper = mount(testComponent);

		const input = wrapper.find('input') as unknown as HTMLInputElement;

		input.value = 'b';

		wrapper.trigger('input');

		timeoutTest(input, wrapper, spy);
	});

	it('doesn\'t throw an error if there is no input', () => {
		const spy = jest.fn();

		const testComponent = createTestComponent(
			'<div v-debounce="100" />',
			spy
		);

		const wrapper = mount(testComponent);

		const inputExists = wrapper.find('input').exists();

		expect(inputExists).toBe(false);
	});
});
