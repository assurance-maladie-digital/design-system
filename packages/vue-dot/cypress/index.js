// Global test configuration
import Vue from 'vue';

import {
	mount,
	mountCallback 
} from '@cypress/vue';

// Add Vuetify
import { vuetify }  from '../dev/vuetify';


/**
 *
 * @param component
 * @param fullMount
 * @returns
 */
 export function mountComponent(
	component,
	options,
	fullMount = false
){
	// Use mount() instead of mountCallback() when fullMount is true
	const fn = fullMount ? mountCallback: mount;

	return fn(component, {
		vuetify,
		...options
	});
}