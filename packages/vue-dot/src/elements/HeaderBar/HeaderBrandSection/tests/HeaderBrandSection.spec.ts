import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderBrandSection from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderBrandSection', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderBrandSection);

		expect(html(wrapper)).toMatchSnapshot();
	});
});