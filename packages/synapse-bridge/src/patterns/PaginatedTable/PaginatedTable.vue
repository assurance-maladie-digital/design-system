<template>
	<VDataTable v-if="$attrs" v-bind="$attrs" :options.sync="optionsCalc" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { DataOptions } from "vuetify/types";
import { VDataTable } from "vuetify/labs/VDataTable";

import { LocalStorageUtility } from "../../helpers/localStorageUtility";

const Props = {
	props: {
		options: {
			type: Object as PropType<DataOptions>,
			required: true,
		},
		// The suffix is used to store different pagination objects
		// If the user has two tables but isn't using this prop,
		// the tables will share the same saved pagination object
		suffix: {
			type: String,
			default: undefined,
		},
	},
};

export default defineComponent({
	inheritAttrs: false,
	components: {
		VDataTable,
	},
	mixins: [Props],
	data() {
		return {
			localStorageUtility: this.newLocalStorageInstance(),
			localOptions: {} as DataOptions,
		};
	},
	watch: {
		options(): void {
			this.localStorageUtility.setItem(this.storageKey, this.options);
		},
	},
	computed: {
		optionsCalc: {
			get(): DataOptions {
				const PREFIX = "pagination";

				if (this.suffix) {
					return `${PREFIX}-${this.suffix}`;
				}

				return PREFIX;
			},
			set(value: DataOptions): void {
				if (Object.keys(this.localOptions).length) {
					this.localOptions = {} as DataOptions;
				}
			},
		},

		storageKey(): string {
			const PREFIX = "pagination";

			if (this.suffix) {
				return `${PREFIX}-${this.suffix}`;
			}

			return PREFIX;
		},
	},
	methods: {
		newLocalStorageInstance(): LocalStorageUtility {
			if (!this.$vd || !this.$vd.localStorageControl) {
				return new LocalStorageUtility();
			}

			return new LocalStorageUtility(
				this.$vd.localStorageControl.version,
				this.$vd.localStorageControl.expiration,
				this.$vd.localStorageControl.prefix
			);
		},
	},
	created() {
		this.localOptions =
			this.localStorageUtility.getItem(this.storageKey) ||
			({} as DataOptions);
	},
});
</script>
