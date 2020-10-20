import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Field } from '../../types';

import { FieldComponent } from '../fieldComponent';

const testField = {
	type: 'text',
	value: null,
	fieldOptions: {
		label: 'Field',
		outlined: true
	}
};

/** Create the wrapper */
function createWrapper(field: Field) {
	const component = Vue.component('Test', {
		mixins: [
			FieldComponent
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			field
		}
	}) as Wrapper<FieldComponent>;
}

// Tests
describe('fieldComponent', () => {
	it('emits change event', async() => {
		const wrapper = createWrapper(testField);

		wrapper.vm.emitChangeEvent(testField.value);

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('emits change event without fieldOptions', async() => {
		const wrapper = createWrapper({
			...testField,
			fieldOptions: undefined
		});

		wrapper.vm.emitChangeEvent(testField.value);

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
	});
});
