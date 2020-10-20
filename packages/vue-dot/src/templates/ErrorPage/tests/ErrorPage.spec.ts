import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import ErrorPage from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('ErrorPage', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(ErrorPage, {
			propsData: {
				pageTitle: 'Error',
				message: 'Error message'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
