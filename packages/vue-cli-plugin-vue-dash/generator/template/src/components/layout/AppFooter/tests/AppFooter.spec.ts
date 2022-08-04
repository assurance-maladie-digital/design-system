import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import {
	Wrapper,
	mount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';
import { html } from '@cnamts/vue-dot/tests/utils/html';

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
