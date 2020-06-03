import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderLoading from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderLoading', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderLoading);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
