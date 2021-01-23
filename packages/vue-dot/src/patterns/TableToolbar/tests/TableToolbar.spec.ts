import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import TableToolbar from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('TableToolbar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				nbFiltered: 1,
				nbTotal: 2,
				showAddBtn: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly when loading', () => {
		// Mount component
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				loading: true,
				nbFiltered: 0,
				nbTotal: 1
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with content slot', () => {
		// Mount component
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				nbFiltered: 0,
				nbTotal: 1
			},
			slots: {
				searchLeft: '<p>search-left</p>'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with no items', () => {
		// Mount component
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				nbFiltered: 0,
				nbTotal: 0
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
