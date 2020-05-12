import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import DataListItem from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('DataListItem', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Test'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a value', () => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Test',
				value: 'value'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with an action', () => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Test',
				action: 'action'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('test click button action', async() => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Test',
				value: 'value',
				action: 'action'
			}
		}, true);

		// Find the button action
		expect(wrapper.find('.vd-data-list-item-action-button').exists()).toBe(true);
		const actionBtn = wrapper.find('.vd-data-list-item-action-button');

		// Click on it
		actionBtn.trigger('click');

		// Wait until $emits have been handled
		await wrapper.vm.$nextTick();

		// Assert event payload
		expect(wrapper.emitted('click:action')).toBeTruthy();
	});
});
