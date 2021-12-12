import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import Logo from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('Logo', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(Logo);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
