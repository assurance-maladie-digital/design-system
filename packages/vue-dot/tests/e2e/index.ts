import {
	mount,
	mountCallback
} from '@cypress/vue';

// Add Vuetify
import { vuetify } from './vuetify';

export type VueComponent =  Vue.ComponentOptions<any> | Vue.VueConstructor;

export type MountType = ReturnType<typeof mount> | ReturnType<typeof mountCallback>;

export type MountOptionsArgument = Record<string, unknown>;

/** Generic mount function */
export function mountComponent(
	component: VueComponent,
	options?: MountOptionsArgument,
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
