
import {
	mount,
	mountCallback
} from '@cypress/vue';

// Add Vuetify
import { vuetify }  from '../../dev/vuetify';

type VueComponent = Vue.VueConstructor;

type MountType = ReturnType<typeof mount> | ReturnType<typeof mountCallback>;
/**
 *
 * @param component
 * @param fullMount
 * @returns
 */
 export function mountComponent(
	component:VueComponent,
	fullMount = false
): MountType{
	// Use mount() instead of mountCallback() when fullMount is true
	const fn = fullMount ? mountCallback: mount;

	return fn(component, {
		vuetify
	});
}