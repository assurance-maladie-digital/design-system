import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	Wrapper,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	mockTranslations
} from '@cnamts/vue-dot/src/helpers/testUtils';

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
		wrapper = shallowMount(AppHeader, {
			localVue,
			vuetify,
			mocks: {
				...mockTranslations<string[]>({
					'components.layout.appHeader.navigationItems': []
				}),
				$maintenanceEnabled: false
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly when maintenance is enabled', () => {
		wrapper = shallowMount(AppHeader, {
			localVue,
			vuetify,
			mocks: {
				$maintenanceEnabled: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
