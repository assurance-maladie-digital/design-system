import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FilterManager from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('FilterManager', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FilterManager);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
