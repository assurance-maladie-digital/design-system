import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import {
	Wrapper,
	html,
	mount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	installRouter
} from '@/tests-unit/utils';

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
