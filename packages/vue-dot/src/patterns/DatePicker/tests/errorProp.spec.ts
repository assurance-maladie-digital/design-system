import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import errorProp from '../mixins/errorProp';

interface TestComponent extends Vue {
	error: boolean;
	internalErrorProp: boolean;
}

/** Create the wrapper */
function createWrapper(error: boolean) {
	const component = Vue.component('test', {
		mixins: [
			errorProp
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			error
		}
	}) as Wrapper<TestComponent>;
}

// Tests
describe('errorProp', () => {
	it('', () => {
		const wrapper = createWrapper(false);

		expect(wrapper.vm.internalErrorProp).toBe(false);
	});

	it('', () => {
		const wrapper = createWrapper(false);

		wrapper.vm.internalErrorProp = true;

		expect(wrapper.emitted('update:error')).toBeTruthy();
	});
});
