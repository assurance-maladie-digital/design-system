import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

import PaginatedTable from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('PaginatedTable', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(PaginatedTable, {
			propsData: {
				options: {},
				serverItemsLength: 0
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
