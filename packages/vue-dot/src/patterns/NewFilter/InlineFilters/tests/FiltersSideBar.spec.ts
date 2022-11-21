import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FilterSideBar from '../';

let wrapper: Wrapper<Vue>;

describe('FilterSideBar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FilterSideBar, {
			propsData: {
				filters: [],
				chipsLimit: 4
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
