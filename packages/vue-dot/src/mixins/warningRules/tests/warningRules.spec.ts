import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { WarningRules } from '../';

interface TestComponent extends Vue {
	validate: (value: string) => void;
	successMessages: string[];
}

/** Create the wrapper */
function createWrapper() {
	const component = Vue.component('Test', {
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

describe('WarningRules', () => {
	it('validates the value correctly on error', () => {
		const wrapper = createWrapper();

		wrapper.vm.validate('');

		expect(wrapper.vm.successMessages[0]).toBe('error');
	});

	it('validates the value correctly on success', () => {
		const wrapper = createWrapper();

		wrapper.vm.validate('test');

		expect(wrapper.vm.successMessages[0]).toBeUndefined();
	});
});
