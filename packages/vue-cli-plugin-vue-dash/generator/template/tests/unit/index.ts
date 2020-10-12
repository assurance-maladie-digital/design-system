// Global test configuration
import Vue from 'vue';

import {
	createLocalVue,
	mount,
	shallowMount,
	MountOptions,
	ShallowMountOptions,
	Wrapper,
	VueClass,
	config
} from '@vue/test-utils';

import { addVApp } from '@cnamts/vue-dot/tests/utils/addVApp';<% if (i18n) { %>

// If mocks is undefined, init it
if (!config.mocks) {
	config.mocks = {};
}

// Mock i18n functions
config.mocks.$t = (key: string) => key;
config.mocks.$tc = (key: string) => key;<% } %>

// Create empty router and export it
import VueRouter, { RouterOptions } from 'vue-router';

/** Default router instance */
export const router = new VueRouter();

/**
 * Create a new router instance with options
 *
 * @param {RouterOptions} options The router options
 * @returns {VueRouter} The router instance
 */
export function newRouter(options: RouterOptions): VueRouter {
	return new VueRouter(options);
}

// Create localVue
const localVue = createLocalVue();

import VueDot from '@cnamts/vue-dot';
import Meta from 'vue-meta';

import Vuex, { Store, StoreOptions } from 'vuex';

/**
 * Create a new store instance with options
 *
 * @param {StoreOptions} options The store options
 * @returns {Store} The store instance
 */
export function newStore<T = unknown>(options: StoreOptions<T>): Store<T> {
	return new Vuex.Store(options);
}

// Bind plugins
localVue.use(VueRouter);
localVue.use(Meta);
localVue.use(Vuex);
localVue.use(VueDot);

// Add Vuetify
import Vuetify from 'vuetify';
Vue.use(Vuetify);

const vuetify = new Vuetify();

import InputFacade from 'vue-input-facade';
localVue.use(InputFacade);

addVApp();

// Register global components
import '@/components/global';

/**
 * Generic mount function
 *
 * @param {VueClass} component The component to mount
 * @param {ShallowMountOptions|MountOptions} [options={}] The mount function options
 * @param {boolean} [fullMount=false] Use mount instead of shallowMount
 * @returns {Wrapper} The wrapper instance
 */
export function mountComponent(
	component: VueClass<Vue>,
	options: ShallowMountOptions<Vue> | MountOptions<Vue> = {},
	fullMount = false
): Wrapper<Vue> {
	// Use mount() instead of shallowMount() when fullMount is true
	const fn = fullMount ? mount : shallowMount;

	return fn(component, {
		localVue,
		vuetify,
		...options
	});
}

export { localVue };
