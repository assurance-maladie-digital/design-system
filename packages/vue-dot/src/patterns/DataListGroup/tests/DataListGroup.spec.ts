import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import DataListGroup from '../';
import HeaderLoading from '../../../elements/HeaderLoading';

Vue.component('HeaderLoading', HeaderLoading);

import { dataListGroupItems } from './data/dataListGroupItems';

let wrapper: Wrapper<Vue>;

describe('DataListGroup', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(DataListGroup, {
			propsData: {
				items: dataListGroupItems
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders loading state correctly', async() => {
		wrapper = mountComponent(DataListGroup, {
			propsData: {
				loading: true,
				items: dataListGroupItems
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});
});
