import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import {
	Wrapper,
	mount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	mockTranslation
} from '@cnamts/vue-dot/src/helpers/testUtils';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import AppHeader from '../';

describe('AppHeader', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = mount(AppHeader, {
			mocks: {
				...mockTranslation<string[]>('components.layout.appHeader.navigationItems', []),
				$maintenanceEnabled: false
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly when maintenance is enabled', () => {
		wrapper = mount(AppHeader, {
			mocks: {
				$maintenanceEnabled: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
