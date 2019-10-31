import Vue from 'vue';

import merge from 'deepmerge';

/**
 * Mixin that merge default options with options passed as props
 *
 * @param {object} defaultOptions The options to apply by default
 *
 * @example
 * // Usage in your component:
 * mixins: [ customizable({ btn: { color: 'primary' } }) ]
 *
 * <VBtn v-bind="options.btn" />
 *
 * // Final API
 * <MyComponent :vuetify-options="{ btn: { color: 'white' } }" />
 */
export default function customizable(defaultOptions: Options) {
	return Vue.extend({
		props: {
			/** User options */
			vuetifyOptions: {
				type: Object,
				default: undefined
			}
		},
		computed: {
			options(): Options {
				// If we have custom options
				if (this.vuetifyOptions) {
					// Merge default options with props
					// Default first to allow override
					return merge.all([
						defaultOptions,
						this.vuetifyOptions
					]) as Options;
				}

				// Else return default options
				return defaultOptions;
			}
		}
	});
}

interface OptionsObj {
	[key: string]: unknown;
}

export interface Options {
	[key: string]: OptionsObj;
}
