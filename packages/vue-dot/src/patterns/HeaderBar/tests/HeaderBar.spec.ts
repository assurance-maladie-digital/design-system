import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
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
