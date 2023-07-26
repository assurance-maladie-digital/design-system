import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import MaintenancePage from '../';
import ErrorPage from '../../../templates/ErrorPage';

Vue.component('ErrorPage', ErrorPage);

let wrapper: Wrapper<Vue>;

describe('MaintenancePage', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(MaintenancePage);

		expect(wrapper).toMatchSnapshot();
	});
});
