import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import NotFoundPage from '../';
import ErrorPage from '../../../templates/ErrorPage';

Vue.component('ErrorPage', ErrorPage);

let wrapper: Wrapper<Vue>;

describe('NotFoundPage', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NotFoundPage);

		expect(wrapper).toMatchSnapshot();
	});
});
