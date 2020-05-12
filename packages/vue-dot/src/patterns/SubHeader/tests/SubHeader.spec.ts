import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import SubHeader from '../';

import { IDataListAction } from './../types.d';
import { dataLists } from './data/subHeader';

let wrapper: Wrapper<Vue>;

// Tests
describe('SubHeader', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				titleText: 'Test'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('test data list with button action and press it', async() => {
		const eventActionValue: IDataListAction = { list: 1, item: 1 };

		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				titleText: 'Test Action',
				dataLists
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();

		// Find the second data list component
		const dataList = wrapper.findAll('.vd-data-list').at(1);
		expect(dataList.exists()).toBe(true);

		// Find the second item element
		const itemWithAction = dataList.findAll('.vd-data-list-item').at(1);
		expect(itemWithAction.exists()).toBe(true);

		// Find the button action in the second item and click on it
		const actionBtn = itemWithAction.find('.vd-data-list-item-action-button');
		expect(actionBtn.exists()).toBe(true);
		actionBtn.trigger('click');

		// Wait until $emits have been handled
		await wrapper.vm.$nextTick();

		// Assert event payload
		expect(wrapper.emitted('click:list-item')).toEqual([[eventActionValue]]);
	});
});
