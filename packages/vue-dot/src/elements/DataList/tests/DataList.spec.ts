import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import DataList from '../';
import { list } from './data/dataList';

let wrapper: Wrapper<Vue>;

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

		const elExists = wrapper.find('.vd-field').exists();
		expect(elExists).toBe(false);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders with item action and event', async() => {

		let actionList = list;
		// Add an action to the second item
		actionList[1].action = 'Modifier';

		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list: actionList,
				flex: true
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();

		// Find the second item element
		const itemWithAction = wrapper.findAll('.vd-data-list-item').at(1);
		expect(itemWithAction.exists()).toBe(true);

		// Find the button action in the second item and click on it
		const actionBtn = itemWithAction.find('.vd-data-list-item-action-button');
		expect(actionBtn.exists()).toBe(true);
		actionBtn.trigger('click');

		// Wait until $emits have been handled
		await wrapper.vm.$nextTick();

		// Assert event payload
		expect(wrapper.emitted('click:item')).toEqual([[1]]);

	});
});
