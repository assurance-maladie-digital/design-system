import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import {
	Wrapper,
	mount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	installRouter
} from '@cnamts/vue-dot/src/helpers/testUtils';
import { html } from '@cnamts/vue-dot/tests/utils/html';

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
		wrapper = mount(App, {
			mocks: {
				$maintenanceEnabled: false
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly when maintenance is enabled', () => {
		wrapper = mount(App, {
			mocks: {
				$maintenanceEnabled: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
