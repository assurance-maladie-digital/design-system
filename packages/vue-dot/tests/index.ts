// Global test configuration
import Vue from 'vue';

import {
	createLocalVue,
	mount,
	shallowMount,
	MountOptions,
	ShallowMountOptions,
	Wrapper,
	VueClass
} from '@vue/test-utils';

// Create localVue
const localVue = createLocalVue();

// Add Vuetify
import Vuetify from 'vuetify';
Vue.use(Vuetify);

const vuetify = new Vuetify();

import VueTheMask from 'vue-the-mask';
localVue.use(VueTheMask);

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
