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

import { addVApp } from './utils/addVApp';

const localVue = createLocalVue();

import Vuetify from 'vuetify';
Vue.use(Vuetify);

const vuetify = new Vuetify();

import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

addVApp();

/** Generic mount function */
export function mountComponent(
	component: VueClass<Vue>,
	options: ShallowMountOptions<Vue> | MountOptions<Vue> = {},
	fullMount = false
): Wrapper<Vue> {
	const fn = fullMount ? mount : shallowMount;

	return fn(component, {
		localVue,
		vuetify,
		...options
	});
}

export { localVue };
