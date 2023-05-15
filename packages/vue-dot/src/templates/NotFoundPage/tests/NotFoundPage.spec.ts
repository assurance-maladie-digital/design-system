import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import NotFoundPage from '../';
import PageContainer from '../../../elements/PageContainer';

Vue.component('PageContainer', PageContainer);

let wrapper: Wrapper<Vue>;

describe('NotFoundPage', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NotFoundPage);

		expect(wrapper).toMatchSnapshot();
	});
});
