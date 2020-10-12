import Vue, { PropType } from 'vue';
import { ExtendedVue } from 'vue/types/vue';

import deepMerge from 'deepmerge';

import { IndexedObject } from '../../types';

export type Customizable = ExtendedVue<Vue, unknown, unknown, {
	options: Options;
}, {
	vuetifyOptions: Options;
}>;

/**
 * Mixin that merge default options with options passed as props
 *
 * @param {object} defaultOptions The options to apply by default
 *
 * @example
 * Usage in your component:
 * mixins: [ customizable({ btn: { color: 'primary' } }) ]
 *
 * <VBtn v-bind="options.btn" />
 *
 * Final API
 * <MyComponent :vuetify-options="{ btn: { color: 'white' } }" />
 */
export function customizable(defaultOptions: Options): Customizable {
	return Vue.extend({
		props: {
			/** User options */
			vuetifyOptions: {
				type: Object as PropType<Options>,
				default: undefined
			}
		},
		computed: {
			options(): Options {
				// If we have custom options
				if (this.vuetifyOptions) {
					// Merge default options with props
					// Default first to allow override
					return deepMerge<Options>(defaultOptions, this.vuetifyOptions);
				}

				// Else return default options
				return defaultOptions;
			}
		}
	});
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Options = IndexedObject<any>;
