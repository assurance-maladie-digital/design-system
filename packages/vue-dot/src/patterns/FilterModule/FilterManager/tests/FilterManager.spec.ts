import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FilterManager from '../';

let wrapper: Wrapper<Vue>;

const filters = [
	{
		type: 'text',
		value: 'Test',
		fieldOptions: {
			label: 'Nom',
			filterTitle: 'Nom',
			hideDetails: true,
			outlined: true
		}
	},
	{
		type: 'number',
		value: 16,
		fieldOptions: {
			label: 'Nombre de fichiers',
			filterTitle: 'Nombre de fichiers',
			hideDetails: true,
			outlined: true,
			mask: '###'
		}
	}
];

describe('FilterManager', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FilterManager, {
			propsData: {
				appliedFilters: filters
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a single filter', () => {
		wrapper = mountComponent(FilterManager, {
			propsData: {
				appliedFilters: [filters[0]]
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
