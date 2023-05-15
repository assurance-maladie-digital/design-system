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

import App from '@/App.vue';

describe('App', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);
	installRouter(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(App, {
			localVue,
			vuetify,
			mocks: {
				$maintenanceEnabled: false
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly when maintenance is enabled', () => {
		wrapper = shallowMount(App, {
			localVue,
			vuetify,
			mocks: {
				$maintenanceEnabled: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
