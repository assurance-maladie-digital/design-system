import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import SubHeader from '../';

import HeaderLoading from '../../../elements/HeaderLoading';

Vue.component('HeaderLoading', HeaderLoading);

import { IDataListAction } from '../types';
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

	it('renders loading state correctly', async() => {
		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				titleText: 'Test',
				loading: true,
				dataLists
			}
		}, true);

		// Check that items does not exist
		const itemsExists = wrapper.findAll('.vd-data-list-item').exists();
		expect(itemsExists).toBe(false);

		// Check that items loading exist
		const itemsLoadingExists = wrapper.findAll('.vd-data-list-loading-item').exists();
		expect(itemsLoadingExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();

	});

	it('transition from mode loading to mode normal correctly', async() => {
		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				titleText: 'Test',
				loading: true,
				dataLists
			}
		}, true);

		wrapper.setProps({ loading: false });

		await wrapper.vm.$nextTick();

		// Check that items now exist
		const itemsExists = wrapper.findAll('.vd-data-list-item').exists();
		expect(itemsExists).toBe(true);

		// Check that items loading does not exist
		const itemsLoadingExists = wrapper.findAll('.vd-data-list-loading-item').exists();
		expect(itemsLoadingExists).toBe(false);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
