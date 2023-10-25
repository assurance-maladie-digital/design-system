<template>
	<VMenu v-bind="options.menu">
		<template #activator="{ attrs }">
			<VBtn
				v-bind="{
					...attrs,
					...options.btn,
				}"
			>
				<VIcon v-bind="options.icon">
					{{ filterIcon }}
				</VIcon>

				{{ locales.filters }}
			</VBtn>
		</template>

		<VList v-bind="options.list">
			<VListItem
				v-for="(item, index) in filters"
				:key="index"
				v-bind="options.listItem"
				@click="emitFilterSelectedEvent(index)"
			>
				{{ item.fieldOptions.filterTitle }}
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { customizable } from "../../../mixins/customizable";

import { mdiFilterVariant } from "@mdi/js";

import { Field } from "@cnamts/form-builder/src/components/FormField/types";

const Props = {
	props: {
		filters: {
			type: Array as PropType<Field[]>,
			required: true,
		},
	},
};

export default defineComponent({
	mixins: [Props, customizable(config)],
	props: {
		...Props.props,
	},
	data() {
		return {
			locales,
			filterIcon: mdiFilterVariant,
		};
	},
	methods: {
		emitFilterSelectedEvent(index: number): void {
			this.$emit('filter-selected', index);
		}
	}
});
</script>
