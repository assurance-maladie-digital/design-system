import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

import NotFound from '../NotFound.vue';

describe('NotFound', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(NotFound, {
			localVue,
			vuetify
		});

		expect(wrapper).toMatchSnapshot();
	});
});
