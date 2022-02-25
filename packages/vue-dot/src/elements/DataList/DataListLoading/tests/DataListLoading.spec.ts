import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import DataListLoading from '../';
import HeaderLoading from '../../../HeaderLoading';

Vue.component('HeaderLoading', HeaderLoading);

let wrapper: Wrapper<Vue>;

describe('DataListLoading', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				label: 'Test'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a header', () => {
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				heading: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with more items', () => {
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				itemsNumber: 3
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly in row mode', () => {
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
