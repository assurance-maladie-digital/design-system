<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { DataOptions } from "./types";
import { VDataTable } from "vuetify/components";

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
		shouldPersistOptions: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			localStorageUtility: this.newLocalStorageInstance() as LocalStorageUtility,
			localOptions: this.options
		};
	},
	watch: {
		localOptions(newOptions: DataOptions): void {
			if (this.shouldPersistOptions) {
				this.localStorageUtility.setItem(this.storageKey, newOptions);				
			}
		},
	},
	computed: {
		storageKey(): string {
			const prefix = 'pagination';

			return this.suffix ? `${prefix}-${this.suffix}` : prefix
		},
	},
	methods: {
		newLocalStorageInstance(): LocalStorageUtility {
			return new LocalStorageUtility();
		}
	},
	created() {
		this.localOptions =
			this.localStorageUtility.getItem(this.storageKey) ||
			({} as DataOptions);
	},
});
</script>

<template>
	<VDataTable v-if="$attrs" v-bind="$attrs" @update:options="(options: DataOptions) => localOptions = options">
		<template v-for="(slot, index) of Object.keys($slots)" :key="index" v-slot:[slot]="scope">
			<slot :name="slot" v-bind="scope" />
		</template>
	</VDataTable>
</template>
