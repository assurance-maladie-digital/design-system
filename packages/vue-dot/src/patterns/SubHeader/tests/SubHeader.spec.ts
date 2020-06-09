import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import SubHeader from '../';

import { IDataListAction } from '../types';
import { dataLists, dataListsHtml } from './data/subHeader';

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

	it('renders correctly with values not rendered into html', () => {
		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				dataLists: dataListsHtml
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with datalist values rendered into html', () => {
		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				dataLists: dataListsHtml,
				valueHtml: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('emits action event correctly', async() => {
		const eventActionValue: IDataListAction = { dataListIndex: 1, itemIndex: 1 };

		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				titleText: 'Test Action',
				dataLists
			}
		}, true);

		// Find the second data list component
		const dataList = wrapper.findAll('.vd-data-list').at(1);
		expect(dataList.exists()).toBe(true);

		// Find the second item element
		const itemWithAction = dataList.findAll('.vd-data-list-item').at(1);
		expect(itemWithAction.exists()).toBe(true);

		// Find the button action in the second item and click on it
		const actionBtn = itemWithAction.find('.vd-data-list-item-action-btn');
		expect(actionBtn.exists()).toBe(true);
		await actionBtn.trigger('click');

		expect(wrapper.emitted('click:list-item')).toEqual([[eventActionValue]]);
	});
});
