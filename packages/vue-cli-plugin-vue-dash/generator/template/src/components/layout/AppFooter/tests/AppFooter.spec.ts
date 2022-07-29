import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import {
	Wrapper,
	html,
	mount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins
} from '@/tests-unit/utils';

import AppFooter from '../';

describe('AppFooter', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = mount(AppFooter);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
