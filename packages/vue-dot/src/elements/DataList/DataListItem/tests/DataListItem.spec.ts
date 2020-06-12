import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

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

	it('renders correctly a value with HTML as text', () => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Name',
				value: 'Paul<br> Dupont'
			}
		});

		const elValue = wrapper.find('.vd-data-list-item-value span');
		expect(elValue.text()).toBe('Paul<br> Dupont');
	});

	it('renders correctly a value as plain HTML', () => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Name',
				value: 'Paul<br> Dupont',
				renderHtmlValue: true
			}
		});

		const elValue = wrapper.find('.vd-data-list-item-value span');
		expect(elValue.text()).toBe('Paul Dupont');
	});

	it('renders correctly value in a chip', () => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Test',
				value: 'value',
				chip: true
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

	it('emits click:action event when the action button is pressed', async() => {
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

	it('renders correctly in row mode', () => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Test',
				value: 'value',
				action: 'Action',
				row: true
			}
		});

		const elExists = wrapper.find('.vd-row').exists();
		expect(elExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
