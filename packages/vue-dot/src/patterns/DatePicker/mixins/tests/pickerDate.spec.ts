import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { PickerDate } from '../pickerDate';

interface TestComponent extends Vue {
	pickerDate: string;
	internalPickerDate: string;
}

/** Create the wrapper */
function createWrapper() {
	const component = Vue.component('test', {
		mixins: [
			PickerDate
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			pickerDate: '2019-10-25'
		}
	}) as Wrapper<TestComponent>;
}

// Tests
describe('PickerDate', () => {
	it('receives the value correctly from the prop', () => {
		const wrapper = createWrapper();

		expect(wrapper.vm.internalPickerDate).toBe('2019-10-25');
	});

	it('emits an event for .sync when the value is updated', () => {
		const wrapper = createWrapper();

		wrapper.vm.internalPickerDate = '2019-10-22';

		expect(wrapper.emitted('update:picker-date')).toBeTruthy();
	});
});
