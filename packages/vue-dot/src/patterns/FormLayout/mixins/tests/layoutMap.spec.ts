import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Layouts } from '../../layoutsEnum';

import layoutMap from '../layoutMap';

/** Create the wrapper */
function createWrapper() {
	const component = Vue.component('test', {
		mixins: [
			layoutMap
		],
		template: '<div />'
	});

	return mount(component) as Wrapper<layoutMap>;
}

// Tests
describe('layoutMap', () => {
	it('contains the map of layouts and their components', () => {
		const wrapper = createWrapper();

		expect(wrapper.vm.layoutMap).toMatchSnapshot();
	});

	it('gets a layout component', () => {
		const wrapper = createWrapper();

		expect(typeof wrapper.vm.getLayout(Layouts.Medium).component).toBe('string');
	});
});
