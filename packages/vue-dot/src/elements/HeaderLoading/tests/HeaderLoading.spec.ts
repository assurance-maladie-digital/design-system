import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

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
