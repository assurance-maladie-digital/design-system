import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

import SubHeader from '../';
import HeaderLoading from '../../../elements/HeaderLoading';

Vue.component('HeaderLoading', HeaderLoading);

import { dataListGroupItems } from './data/subHeader';

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

	it('renders loading state correctly', async() => {
		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				titleText: 'Test',
				loading: true,
				dataListGroupItems
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
