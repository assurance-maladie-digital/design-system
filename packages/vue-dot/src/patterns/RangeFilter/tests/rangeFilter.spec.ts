import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import RangeFilter from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('RangeFilter', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(RangeFilter);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
