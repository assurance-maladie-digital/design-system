import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import SearchBar from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('SearchBar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(SearchBar);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
