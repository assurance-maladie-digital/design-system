<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { DataOptions } from "./types";
import { VDataTable } from "vuetify/labs/VDataTable";

import { LocalStorageUtility } from "@/helpers/localStorageUtility";

export default defineComponent({
	inheritAttrs: false,
	components: {
		VDataTable,
	},
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
	data() {
		return {
			localStorageUtility: this.newLocalStorageInstance(),
			localOptions: {} as DataOptions
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
				if (Object.keys(this.localOptions).length) {
					return this.localOptions;
				}

				return this.options;
			},
			set(): DataOptions {
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
			return new LocalStorageUtility();
		},
	},
	created() {
		this.localOptions =
			this.localStorageUtility.getItem(this.storageKey) ||
			({} as DataOptions);
	},
});
</script>

<template>
	<VDataTable v-if="$attrs" v-bind="$attrs" :options.sync="optionsCalc">
		<template v-for="slot of $slots" v-slot:[slot]="scope">
			<slot :name="slot" v-bind="scope" />
		</template>
	</VDataTable>
</template>
