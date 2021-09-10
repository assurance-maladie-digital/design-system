import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderNavBar from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderNavBar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavBar);

		expect(html(wrapper)).toMatchSnapshot();
	});
});