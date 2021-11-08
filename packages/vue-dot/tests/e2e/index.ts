import {
	mount,
	mountCallback
} from '@cypress/vue';

// Add Vuetify
import { vuetify } from './vuetify';

export type VueComponent =  Vue.ComponentOptions<any> | Vue.VueConstructor;

export type MountType = ReturnType<typeof mount> | ReturnType<typeof mountCallback> | any;

export type OptionsType =  Record<string, unknown> | any;

/** Generic mount function */
export function mountComponent(
	component: VueComponent | Record<string, unknown>,
	options?: OptionsType,
	fullMount = false
): MountType {
	// Use mount() instead of mountCallback() when fullMount is true
	const fn = fullMount ? mountCallback : mount;
	return fn(
		component, {
			vuetify,
			...options
		});
}