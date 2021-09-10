import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderBar from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderBar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderBar);

		expect(html(wrapper)).toMatchSnapshot();
	});
});