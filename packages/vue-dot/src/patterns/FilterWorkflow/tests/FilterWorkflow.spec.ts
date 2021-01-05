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
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('show multiple actives filters', () => {

		const activefilters = [
			{
				filterName: 'date',
				label: 'date',
				text: 'text',
				type: 'date',
				values: {
					date: {
						from: '2020-12-01',
						to: null
					}
				}
			},
			{
				filterName: 'nbDownload',
				label: 'Nombre de téléchargement',
				text: 'minimum 1',
				type: 'number',
				values: {
					numberMin: '1'
				}
			}
		];

		// Mount component
		wrapper = mountComponent(FilterWorkflow, {
			propsData: {
				rows: dataRows,
				filters: dataFilters
			},
			data: () => {
				return  {
					activefilters
				};
			}
		}, true);

		// TODO: set multiple filter active

		expect(html(wrapper)).toMatchSnapshot();
	});
});
