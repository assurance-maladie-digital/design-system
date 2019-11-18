// Global test configuration
import Vue from 'vue';

import <% if (i18n) { %>VueTestUtils, <% } %>{
	createLocalVue,
	mount,
	shallowMount,
	VueClass,
	MountOptions,
	ShallowMountOptions
} from '@vue/test-utils';<% if (i18n) { %>

// If mocks is undefined, init it
if (!VueTestUtils.config.mocks) {
	VueTestUtils.config.mocks = {};
}

// Mock i18n functions
VueTestUtils.config.mocks.$t = (key: string) => key;
VueTestUtils.config.mocks.$tc = (key: string) => key;<% } %>

// Create empty router and export it
import VueRouter from 'vue-router';
export const router = new VueRouter();

// Create localVue
const localVue = createLocalVue();

import VueDot from '@cnamts/vue-dot';
import Meta from 'vue-meta';
import Vuex from 'vuex';

// Bind plugins
localVue.use(VueRouter);
localVue.use(Meta);
localVue.use(Vuex);
localVue.use(VueDot);

// Add Vuetify
import Vuetify from 'vuetify';
Vue.use(Vuetify);

// Register global components
import '@/components/global';

const vuetify = new Vuetify();

/** Generic build fonction */
export function mountComponent(
	component: VueClass<Vue>,
	options?: ShallowMountOptions<Vue> | MountOptions<Vue>,
	fullMount = false
) {
	// Use mount() instead of shallowMount() when fullMount is true
	const fn = fullMount ? mount : shallowMount;

	return fn(component, {
		localVue,
		vuetify,
		...options
	});
}

export default localVue;
