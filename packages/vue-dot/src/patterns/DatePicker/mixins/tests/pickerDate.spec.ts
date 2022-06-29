import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { PickerDate } from '../pickerDate';

interface TestComponent extends Vue {
	pickerDate: string;
	internalPickerDate: string;
}

/** Create the wrapper */
function createWrapper(pickerDate?: string, birthdate = false) {
	const component = Vue.component('TestComponent', {
		mixins: [
			PickerDate
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			pickerDate
		},
		mocks: {
			birthdate
		}
	}) as Wrapper<TestComponent>;
}

describe('PickerDate', () => {
	it('receives the value correctly from the prop', () => {
		const wrapper = createWrapper('2019-10');

		expect(wrapper.vm.internalPickerDate).toBe('2019-10');
	});

	it('emits an event for .sync when the value is updated', () => {
		const wrapper = createWrapper('2019-10');

		wrapper.vm.internalPickerDate = '2019-10';

		expect(wrapper.emitted('update:picker-date')).toBeTruthy();
	});

	it('sets the default value to 1990 on birthdate mode', async() => {
		const wrapper = createWrapper(undefined, true);

		expect(wrapper.vm.internalPickerDate).toBe('1990-01');

		await wrapper.setProps({
			pickerDate: '2021-04'
		});

		expect(wrapper.vm.internalPickerDate).toBe('2021-04');
	});
});
