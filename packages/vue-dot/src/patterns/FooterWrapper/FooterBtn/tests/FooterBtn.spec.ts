import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FooterBtn from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('FooterBtn', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FooterBtn);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
