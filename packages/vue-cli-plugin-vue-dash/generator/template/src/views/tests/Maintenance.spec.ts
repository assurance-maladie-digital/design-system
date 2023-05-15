import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	Wrapper,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

import Maintenance from '../Maintenance.vue';

describe('Maintenance', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(Maintenance, {
			localVue,
			vuetify
		});

		expect(wrapper).toMatchSnapshot();
	});
});
