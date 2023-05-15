import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import TableToolbar from '../';

let wrapper: Wrapper<Vue>;

describe('TableToolbar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				nbFiltered: 1,
				nbTotal: 2,
				showAddBtn: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly when loading', () => {
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				loading: true,
				nbFiltered: 0,
				nbTotal: 1
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with content slot', () => {
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				nbFiltered: 0,
				nbTotal: 1
			},
			slots: {
				searchLeft: '<p>search-left</p>'
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with no items', () => {
		wrapper = mountComponent(TableToolbar, {
			propsData: {
				nbFiltered: 0,
				nbTotal: 0
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
