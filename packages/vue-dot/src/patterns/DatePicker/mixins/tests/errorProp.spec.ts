import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { ErrorProp } from '../errorProp';

interface TestComponent extends Vue {
	error: boolean;
	internalErrorProp: boolean;
}

/** Create the wrapper */
function createWrapper(error: boolean) {
	const component = Vue.component('TestComponent', {
		mixins: [
			ErrorProp
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			error
		}
	}) as Wrapper<TestComponent>;
}

describe('ErrorProp', () => {
	it('receives the value correctly from the prop', () => {
		const wrapper = createWrapper(false);

		expect(wrapper.vm.internalErrorProp).toBe(false);
	});

	it('emits an event for .sync when the value is updated', () => {
		const wrapper = createWrapper(false);

		wrapper.vm.internalErrorProp = true;

		expect(wrapper.emitted('update:error')).toBeTruthy();
	});
});
