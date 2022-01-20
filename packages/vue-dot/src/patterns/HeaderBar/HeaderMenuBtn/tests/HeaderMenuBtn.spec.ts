import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderMenuBtn from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderMenuBtn', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderMenuBtn);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
