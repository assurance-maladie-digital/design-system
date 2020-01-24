import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import fieldMap from '../fieldMap';

/** Create the wrapper */
function createWrapper() {
	const component = Vue.component('test', {
		mixins: [
			fieldMap
		],
		template: '<div />'
	});

	return mount(component) as Wrapper<fieldMap>;
}

// Tests
describe('fieldMap', () => {
	it('contains the map of fields and their components', () => {
		const wrapper = createWrapper();

		expect(wrapper.vm.fieldMap).toMatchSnapshot();
	});

	it('gets a field component', () => {
		const wrapper = createWrapper();

		expect(typeof wrapper.vm.getField('text')).toBe('string');
	});
});
