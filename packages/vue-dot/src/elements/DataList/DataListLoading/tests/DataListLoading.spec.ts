import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import DataListLoading from '../';
import HeaderLoading from '../../../HeaderLoading';

Vue.component('HeaderLoading', HeaderLoading);

let wrapper: Wrapper<Vue>;

// Tests
describe('DataListLoading', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				label: 'Test'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a header', () => {
		// Mount component
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				heading: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with more items', () => {
		// Mount component
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				itemsNumber: 3
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly in column mode', () => {
		// Mount component
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				itemsNumber: 3
			}
		});

		const elExists = wrapper.find('.flex-column').exists();
		expect(elExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly in flex mode', () => {
		// Mount component
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				itemsNumber: 3,
				flex: true
			}
		});

		const elExists = wrapper.find('.flex-wrap').exists();
		expect(elExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly in row mode', () => {
		// Mount component
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				itemsNumber: 3,
				row: true
			}
		});

		const elExists = wrapper.find('.vd-row').exists();
		expect(elExists).toBe(true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
