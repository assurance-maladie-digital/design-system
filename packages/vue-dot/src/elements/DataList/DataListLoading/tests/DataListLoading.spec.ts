import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

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

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with a header', () => {
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				heading: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with more items', () => {
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				itemsNumber: 3
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly in row mode', () => {
		wrapper = mountComponent(DataListLoading, {
			propsData: {
				itemsNumber: 3,
				row: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
