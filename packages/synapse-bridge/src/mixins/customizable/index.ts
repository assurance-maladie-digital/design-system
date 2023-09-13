import { PropType } from "vue";
import { Component, Vue, Prop } from "vue-facing-decorator";

import deepMerge from "deepmerge";

import type { Customizable, Options } from "./types";

/**
 * Mixin that merge default options with options passed as props
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
	@Component
	class CustomizableMixin extends Vue {
		@Prop({ type: Object as PropType<Options>, default: () => ({}) })
		vuetifyOptions!: Options;

		get options(): Options {
			return deepMerge(defaultOptions, this.vuetifyOptions);
		}
	}

	return CustomizableMixin;
}

export type { Options };
