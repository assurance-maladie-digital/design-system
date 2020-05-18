import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FooterWrapper from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('FooterWrapper', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FooterWrapper);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
