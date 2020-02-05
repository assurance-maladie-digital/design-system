import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Field } from '../../../FormField/types';

import { LayoutComponent } from '../layoutComponent';

const testFieldString = {
	type: 'text',
	value: null
};

const testFieldNumber = {
	type: 'number',
	value: null
};

const testFields = [
	testFieldString,
	testFieldNumber
];

/** Create the wrapper */
function createWrapper(fields: Field[]) {
	const component = Vue.component('test', {
		mixins: [
			LayoutComponent
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			fields
		}
	}) as Wrapper<LayoutComponent>;
}

// Tests
describe('LayoutComponent', () => {
	it('retrieves a field', () => {
		const wrapper = createWrapper(testFields);

		expect(wrapper.vm.getField(1)).toEqual(testFieldNumber);
	});
});
