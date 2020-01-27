import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Field } from '../../types';

import fieldComponent from '../fieldComponent';

const testField = {
	type: 'text',
	value: null,
	metadata: {
		label: 'Field',
		outlined: true
	}
};

/** Create the wrapper */
function createWrapper(field: Field) {
	const component = Vue.component('test', {
		mixins: [
			fieldComponent
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			field
		}
	}) as Wrapper<fieldComponent>;
}

// Tests
describe('fieldComponent', () => {
	it('emits change event', async() => {
		const wrapper = createWrapper(testField);

		wrapper.vm.emitChangeEvent(testField.value);

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
	});
});
