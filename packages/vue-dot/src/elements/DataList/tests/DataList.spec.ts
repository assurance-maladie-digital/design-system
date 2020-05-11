import { IDataList } from './../../../patterns/SubHeader/types.d';
import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import DataList from '../';
import { IDataListItem } from '../types';

let wrapper: Wrapper<Vue>;

const list: IDataListItem[] = [
	{
		key: 'Civility',
		value: ''
	},
	{
		key: 'Name',
		value: 'Dupont'
	},
	{
		key: 'First name',
		value: 'Paul'
	}
];

const itemsNumberLoading: number = 2;

// Tests
describe('DataList', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list
			}
		});

		const elExists = wrapper.find('.vd-data-list').exists();
		expect(elExists).toBe(true);

		// Check items exists
		const itemsExists = wrapper.find('.vd-data-list-item').exists();
		expect(itemsExists).toBe(true);

		const titleExists = wrapper.find('h4').exists();
		expect(titleExists).toBe(false);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a title', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list,
				listTitle: 'Informations'
			}
		});

		const elExists = wrapper.find('h4').exists();
		expect(elExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly in column mode', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list,
				column: true
			}
		});

		const elExists = wrapper.find('.vd-column').exists();
		expect(elExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly in flex mode', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list,
				flex: true
			}
		});

		const elExists = wrapper.find('.vd-flex').exists();
		expect(elExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with an empty list', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list: []
			}
		});

		// Check items does not exist
		const itemsExists = wrapper.find('.vd-data-list-item').exists();
		expect(itemsExists).toBe(false);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders loading', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list,
				loading: true,
				headingLoading: true,
				itemsNumberLoading
			}
		});

		// Check that items does not exist
		let itemsExists = wrapper.find('.vd-data-list-item').exists();
		expect(itemsExists).toBe(false);

		expect(html(wrapper)).toMatchSnapshot();

		wrapper.setProps({ loading: false });

		Vue.nextTick(() => {
			// Check that items now exist
			itemsExists = wrapper.find('.vd-data-list-item').exists();
			expect(itemsExists).toBe(true);

			expect(html(wrapper)).toMatchSnapshot();
		});

	});
});
