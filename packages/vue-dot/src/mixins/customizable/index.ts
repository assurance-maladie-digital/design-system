import Vue, { PropType } from 'vue';

import deepMerge from 'deepmerge';

import type { Customizable, Options } from './types';

/**
 * Mixin that merge default options with options passed as props
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
			vuetifyOptions: {
				type: Object as PropType<Options>,
				default: undefined
			}
		},
		computed: {
			options(): Options {
				if (this.vuetifyOptions) {
					return deepMerge<Options>(defaultOptions, this.vuetifyOptions);
				}

				return defaultOptions;
			}
		}
	});
}

export type { Options };
