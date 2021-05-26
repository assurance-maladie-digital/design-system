import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FilterSelector from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('FilterSelector', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FilterSelector, {
			propsData: {
				filters: []
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
