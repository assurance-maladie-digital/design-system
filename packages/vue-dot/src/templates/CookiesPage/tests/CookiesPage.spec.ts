import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CookiesPage from '../';
import PageContainer from '../../../elements/PageContainer';

import { cookiesList } from './data/cookiesList';

Vue.component('PageContainer', PageContainer);

let wrapper: Wrapper<Vue>;

describe('CookiesPage', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CookiesPage, {
			propsData: {
				items: cookiesList
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
