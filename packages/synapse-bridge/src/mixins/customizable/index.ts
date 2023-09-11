import { defineComponent, PropType, computed } from "vue";
import deepMerge from "deepmerge";

import type { Customizable, Options } from "./types";

/**
 * Composition function that merges default options with options passed as props
 * @example
 * Usage in your component script setup:
 * setup(props) {
 *   const { options } = customizable({ btn: { color: 'primary' } });
 *   return { options };
 * }
 *
 * <VBtn v-bind="options.btn" />
 *
 * Final API
 * <MyComponent :vuetify-options="{ btn: { color: 'white' } }" />
 */
export function customizable(defaultOptions: Options): Customizable {
	return defineComponent({
		props: {
			vuetifyOptions: {
				type: Object as PropType<Options>,
				default: undefined,
			},
		},
		setup(props) {
			const options = computed(() => {
				if (props.vuetifyOptions) {
					return deepMerge<Options>(
						defaultOptions,
						props.vuetifyOptions
					);
				}

				return defaultOptions;
			});

			return {
				options,
			};
		},
	});
}

export type { Options };
