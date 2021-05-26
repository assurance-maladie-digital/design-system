import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FilterModule from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('FilterModule', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FilterModule, {
			propsData: {
				filters: []
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
