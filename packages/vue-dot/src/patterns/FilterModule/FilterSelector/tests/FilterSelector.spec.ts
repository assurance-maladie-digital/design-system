import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

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
