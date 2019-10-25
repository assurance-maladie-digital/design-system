import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import DatePicker from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('DatePicker', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DatePicker);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
