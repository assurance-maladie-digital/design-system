<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { mdiMagnify } from "@mdi/js";

import type { SearchListItem } from "./types";
import { locales } from "./locales";

export default defineComponent({
	props: {
		modelValue: {
			type: Array as PropType<unknown[]>,
			default: () => [],
		},
		items: {
			type: Array as PropType<SearchListItem[]>,
			default: () => [],
		},
	},
	emits: ["update:modelValue"],
	data() {
		return {
			search: null as string | null,
			internalValue: this.modelValue,
			searchIcon: mdiMagnify,
			locales,
		};
	},
	watch: {
		modelValue(value: unknown[]): void {
			this.internalValue = value;
		},
	},
	computed: {
		filteredItems(): SearchListItem[] {
			if (this.search === null) {
				return this.items;
			}
			const searchLower = this.search.toLowerCase();
			return this.items.filter(item => item.label.toLowerCase().includes(searchLower));
		},
	},
	methods: {
		emitChangeEvent(value: unknown[]): void {
			this.$emit("update:modelValue", value);
		},
	},
});
</script>

<template>
	<div class="vd-search-list">
		<VTextField
			v-model="search"
			:label="locales.search"
			hide-details
			variant="outlined"
			color="primary"
			clearable
		>
			<template #prepend-inner>
				<VIcon class="mr-1">
					{{ searchIcon }}
				</VIcon>
			</template>
		</VTextField>

		<VList
			select-strategy="classic"
			class="pb-0"
			v-model:selected="internalValue"
			@update:selected="emitChangeEvent"

		>
			<VListItem
				v-for="(item, index) in filteredItems"
				:key="index"
				:value="item.value"
				active-class="text-primary"
				class="d-flex align-center justify-start"
			>
				<template v-slot:prepend="{ isActive }">
					<VListItemAction start>
						<VCheckboxBtn :model-value="isActive">
							<template v-slot:label>
								<span class="d-sr-only">
									{{ locales.checkboxLabel }}
								</span>
							</template>
						</VCheckboxBtn>
					</VListItemAction>

					<VListItemTitle>{{ item.label }}</VListItemTitle>
				</template>
			</VListItem>
		</VList>
	</div>
</template>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";

.vd-search-list .v-list-item--active::before {
	opacity: 0;
}
</style>
