import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

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

// Tests
describe('DatePicker', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DatePicker, {
			stubs: {
				textField: createTextField()
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
