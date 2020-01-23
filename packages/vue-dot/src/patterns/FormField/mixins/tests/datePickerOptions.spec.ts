import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Options } from '../../../../mixins/customizable';

import datePickerOptions from '../datePickerOptions';

/** Create the wrapper */
function createWrapper() {
	const component = Vue.component('test', {
		mixins: [
			datePickerOptions
		],
		template: '<div />'
	});

	return mount(component) as Wrapper<datePickerOptions>;
}

// Tests
describe('datePickerOptions', () => {
	it('returns the options', () => {
		const wrapper = createWrapper();

		expect(wrapper.vm.getVuetifyOptions()).toMatchSnapshot();
	});

	it('returns the options and merge correctly', () => {
		const wrapper = createWrapper();

		const options: Options = {
			menu: {
				nudgeBottom: 80
			},
			other: {
				test: true
			}
		};

		expect(wrapper.vm.getVuetifyOptions(options)).toMatchSnapshot();
	});
});
