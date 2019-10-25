import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import warningRules from '../';

interface TestComponent extends Vue {
	validate: (value: string) => void;
	successMessages: string[];
}

/** Create the test component */
function createTestComponent() {
	return Vue.component('test', {
		mixins: [
			warningRules
		],
		template: '<div />'
	});
}

// Tests
describe('warningRules', () => {
	it('validates correctly the value', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				warningRules: [
					// Required rule
					(value: string) => Boolean(value) || 'error'
				]
			}
		}) as Wrapper<TestComponent>;

		// Empty value
		wrapper.vm.validate('');

		// Error
		expect(wrapper.vm.successMessages[0]).toBe('error');

		// Filled value
		wrapper.vm.validate('test');

		// No error
		expect(wrapper.vm.successMessages[0]).toBe(undefined);
	});
});
