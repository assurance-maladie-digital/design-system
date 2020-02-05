import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { WarningRules } from '../';

interface TestComponent extends Vue {
	validate: (value: string) => void;
	successMessages: string[];
}

/** Create the wrapper */
function createWrapper() {
	const component = Vue.component('test', {
		mixins: [
			WarningRules
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			warningRules: [
				// Required rule
				(value: string) => Boolean(value) || 'error'
			]
		}
	}) as Wrapper<TestComponent>;
}

// Tests
describe('WarningRules', () => {
	it('validates the value correctly on error', () => {
		const wrapper = createWrapper();

		// Empty value
		wrapper.vm.validate('');

		// Error
		expect(wrapper.vm.successMessages[0]).toBe('error');
	});

	it('validates the value correctly on success', () => {
		const wrapper = createWrapper();

		// Filled value
		wrapper.vm.validate('test');

		// No error
		expect(wrapper.vm.successMessages[0]).toBe(undefined);
	});
});
