// Global test configuration
import Vue from 'vue';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify';

import { lightTheme } from '@cnamts/design-tokens/src/colors';

Vue.use(Vuetify);

export const vuetify = new Vuetify({
	theme: {
		themes: {
			light: lightTheme
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	}
});

import {
	mount,
	mountCallback
} from '@cypress/vue';

/**
 *
 * @param component
 * @param fullMount
 * @returns
 */
export function mountComponent(
	component:  VueComponent,
	fullMount = false
): any{
	// Use mount() instead of mountCallback() when fullMount is true
	const fn = fullMount ? mountCallback: mount;

	return fn(component, {
		vuetify
	});
}
