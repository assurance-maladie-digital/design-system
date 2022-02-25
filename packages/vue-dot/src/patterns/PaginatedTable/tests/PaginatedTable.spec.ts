import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import PaginatedTable from '../';

let wrapper: Wrapper<Vue>;

describe('PaginatedTable', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PaginatedTable, {
			propsData: {
				options: {},
				serverItemsLength: 0
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
