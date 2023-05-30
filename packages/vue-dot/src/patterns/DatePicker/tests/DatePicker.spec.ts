import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import DatePicker from '../';

let wrapper: Wrapper<Vue>;

/** Create fake VTextField for refs */
function createTextField() {
	return Vue.component('VTextField', {
		data() {
			return {
				hasError: false,
				hasFocused: false
			};
		},
		methods: {
			validate() {
				return null;
			}
		},
		template: '<div />'
	});
}

describe('DatePicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(DatePicker, {
			stubs: {
				textField: createTextField()
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});
});
