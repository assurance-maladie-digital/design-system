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
		wrapper = mountComponent(TableToolbar);

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
				showCreateBtn: true
			},
			slots: {
				rowsNumber: '<p>4 lignes</p>',
				searchLeft: '<p>search-left</p>'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
