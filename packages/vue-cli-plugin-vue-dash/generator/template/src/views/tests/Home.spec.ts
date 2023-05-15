import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	installRouter
} from '@cnamts/vue-dot/src/helpers/testUtils';

import Home from '../Home.vue';

describe('Home', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);
	installRouter(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(Home, {
			localVue,
			vuetify
		});

		expect(wrapper).toMatchSnapshot();
	});
});
