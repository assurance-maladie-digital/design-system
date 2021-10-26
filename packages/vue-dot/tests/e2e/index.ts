import {
	mount,
	mountCallback
} from '@cypress/vue';

// Add Vuetify
import { vuetify } from './vuetify';

type VueComponent = Vue.VueConstructor;

type MountType = ReturnType<typeof mount> | ReturnType<typeof mountCallback>;

/** Generic mount function */
export function mountComponent(
	component: VueComponent,
	fullMount = false
): MountType {
	// Use mount() instead of mountCallback() when fullMount is true
	const fn = fullMount ? mountCallback : mount;

	return fn(component, {
		vuetify
	});
}
