import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import TableToolbar from '..';

let wrapper: Wrapper<Vue>;

// Tests
describe('TableToolbar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				nbFiltered:0,
				nbTotal: 0
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders with full configuration', () => {
		// Mount component
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				search: 'recherche',
				tableLoading: true,
				searchLabel: 'Rechercher',
				createBtnLabel: 'Ajouter',
				showCreateBtn: true,
				nbFiltered:0,
				nbTotal: 1
			},
			slots: {
				searchLeft: '<p>search-left</p>'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders with multiple items', () => {
		// Mount component
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				search: 'recherche',
				nbFiltered:1,
				nbTotal: 2
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
