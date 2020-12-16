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

	it('show multiple actives filters', () => {
		// Mount component
		wrapper = mountComponent(FilterWorkflow, {
			propsData: {
				rows: dataRows,
				filters: dataFilters
			},
			mocks: {
				activeFilters: [
					{
						filterName: 'date',
						label: 'date',
						text: 'text',
						type: 'date',
						values: {
							from: '2020/12/01'
						}
					},
					{
						filterName: 'nbDownload',
						label: 'Nombre de téléchargement',
						text: 'minimum 1',
						type: 'number',
						values: {
							min: '1'
						}
					}
				]
			}
		}, true);

		// TODO: set multiple filter active

		expect(html(wrapper)).toMatchSnapshot();
	});
});
