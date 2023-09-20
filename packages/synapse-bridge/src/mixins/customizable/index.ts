import { PropType, defineComponent, ComputedRef } from "vue";
import deepMerge from "deepmerge";
import { Options } from "./types";

interface Customizable {
	options: ComputedRef<Options>;
}

export function customizable(defaultOptions: Options): Customizable {
	return defineComponent({
		props: {
			vuetifyOptions: {
				type: Object as PropType<Options>,
				default: () => ({}),
			},
		},
		computed: {
			options(): ComputedRef<Options> {
				return deepMerge(
					defaultOptions,
					this.vuetifyOptions
				) as ComputedRef<Options>;
			},
		},
	}) as unknown as Customizable;
}

export default customizable;
