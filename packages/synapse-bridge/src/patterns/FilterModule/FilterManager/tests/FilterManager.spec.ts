import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';
import FilterManager from '../';

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
		const wrapper = mount(FilterManager, {
			propsData: {
				appliedFilters: filters
			},
			global: {
				plugins: [vuetify]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with a single filter', () => {
		const wrapper = mount(FilterManager, {
			propsData: {
				appliedFilters: [filters[0]]
			},
			global: {
				plugins: [vuetify]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
