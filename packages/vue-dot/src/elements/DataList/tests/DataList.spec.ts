import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import DataList from '../';

import { dataList } from './data/dataList';

const itemsNumberLoading: number = 2;

let wrapper: Wrapper<Vue>;

// Tests
describe('DataList', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list: dataList
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
				list: dataList,
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
				list: dataList,
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
				list: dataList,
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

	it('renders loading state correctly', async() => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list: dataList,
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

		await Vue.nextTick();

		// Check that items now exist
		itemsExists = wrapper.find('.vd-data-list-item').exists();
		expect(itemsExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with an action', async() => {
		let actionList = dataList;

		// Add an action to the second item
		actionList[1].action = 'Edit';

		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list: actionList,
				flex: true
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('emits action event', async() => {
		let actionList = dataList;

		// Add an action to the second item
		actionList[1].action = 'Edit';

		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list: actionList,
				flex: true
			}
		}, true);

		// Find the second item element
		const itemWithAction = wrapper.findAll('.vd-data-list-item').at(1);
		expect(itemWithAction.exists()).toBe(true);

		// Find the button action in the second item and click on it
		const actionBtn = itemWithAction.find('.vd-data-list-item-action-btn');
		expect(actionBtn.exists()).toBe(true);

		actionBtn.trigger('click');

		// Wait until $emits have been handled
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('click:item-action')).toEqual([[1]]);
	});
});
