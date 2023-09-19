import type { PropType } from "vue";

import deepMerge from "deepmerge";

import type { Customizable, Options } from "./types";

/**
 * Mixin that merges default options with options passed as props
 * @example
 * Usage in your component:
 * mixins: [ customizable({ btn: { color: 'primary' } }) ]
 *
 * <VBtn v-bind="options.btn" />
 *
 * Final API
 * <MyComponent :vuetify-options="{ btn: { color: 'white' } }" />
 */

const Props = {
	vuetifyOptions: {
		type: Object as PropType<Options>,
		default: () => ({}),
	},
};

export function customizable(defaultOptions: Options): Customizable {
	return {
		props: {
			vuetifyOptions: {
				type: Object as PropType<Options>,
				default: () => ({}),
			},
		},

		computed: {
			options(): Options {
				return deepMerge<Options>(defaultOptions, Props.vuetifyOptions);
			},
		},
	} as Customizable;
}

export default customizable;
