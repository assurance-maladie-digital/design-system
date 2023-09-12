import { reactive } from "vue";
import deepMerge from "deepmerge";

import type { Customizable, Options } from "./types";

/**
 *
 */
export function customizable(defaultOptions: Options): Customizable {
	const props = {
		vuetifyOptions: {
			type: Object,
			default: () => ({}),
		},
	};

	const options = reactive<Options>(
		deepMerge<Options>(defaultOptions, props)
	);

	return {
		props,
		computed: {
			options(): Options {
				return options;
			},
		},
	};
}

export type { Options };
