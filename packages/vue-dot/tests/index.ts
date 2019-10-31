// Global test configuration
import Vue from 'vue';

import {
	createLocalVue,
	mount,
	shallowMount,
	VueClass,
	MountOptions,
	ShallowMountOptions
} from '@vue/test-utils';

// Create localVue with the default plugins
const localVue = createLocalVue();

// Add Vuetify
import Vuetify from 'vuetify';
Vue.use(Vuetify);

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
