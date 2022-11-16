import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import SearchFilter from '../';

let wrapper: Wrapper<Vue>;

describe('PeriodFilter', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(SearchFilter, {
			propsData: {
				//
			}
		});
		expect(html(wrapper)).toMatchSnapshot();
	});
});
