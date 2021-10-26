import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

import ErrorPage from '../';
import PageContainer from '../../../elements/PageContainer';

Vue.component('PageContainer', PageContainer);

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
