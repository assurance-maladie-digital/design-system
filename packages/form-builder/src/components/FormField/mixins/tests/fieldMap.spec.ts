import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FieldMap } from '../fieldMap';

/** Create the wrapper */
function createWrapper() {
	const component = Vue.component('Test', {
		mixins: [
			FieldMap
		],
		template: '<div />'
	});

	return mount(component) as Wrapper<FieldMap>;
}

describe('FieldMap', () => {
	it('contains the map of fields and their components', () => {
		const wrapper = createWrapper();

		expect(wrapper.vm.fieldMap).toMatchSnapshot();
	});

	it('gets a field component', () => {
		const wrapper = createWrapper();

		expect(typeof wrapper.vm.getField('text')).toBe('string');
	});
});
