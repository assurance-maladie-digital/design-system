import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import MaintenancePage from '../';
import PageContainer from '../../../elements/PageContainer';

Vue.component('PageContainer', PageContainer);

let wrapper: Wrapper<Vue>;

describe('MaintenancePage', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(MaintenancePage);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
