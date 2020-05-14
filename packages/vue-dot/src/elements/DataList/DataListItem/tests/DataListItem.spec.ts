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

	it('emits click:action event when the button action is pressed', async() => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Test',
				value: 'value',
				action: 'Action'
			}
		}, true);

		// Find the button action
		const actionBtn = wrapper.find('.vd-data-list-item-action-btn');
		expect(actionBtn.exists()).toBe(true);

		// Click on it
		actionBtn.trigger('click');

		// Wait until $emits have been handled
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('click:action')).toBeTruthy();
	});
});
