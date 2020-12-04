import { dataRows, dataFilters } from './data/dataFilters';
import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FilterWorkflow from '..';

let wrapper: Wrapper<Vue>;

// Tests
describe('FilterWorkflow', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FilterWorkflow, {
			propsData: {
				rows: dataRows,
				filters: dataFilters
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
