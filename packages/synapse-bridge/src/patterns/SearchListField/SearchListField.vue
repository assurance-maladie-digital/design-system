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

		<VList class="pb-0">
			<VListItem
				v-for="(item, index) in filteredItems"
				:key="index"
				:value="item.value"
				active-class="text-primary"
				class="d-flex align-center justify-start"
				@click="emitChangeEvent(item.value)"
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

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { mdiMagnify } from "@mdi/js";

import { SearchListItem } from "./types";
import { locales } from "./locales";

const Props = {
	props: {
		value: {
			type: Array as PropType<unknown[]>,
			default: () => [],
		},
		items: {
			type: Array as PropType<SearchListItem[]>,
			default: () => [],
		},
	},
};

export default defineComponent({
	mixins: [Props],
	props: {
		...Props.props,
	},
	emits: ["change"],
	data() {
		return {
			search: null as string | null,
			searchIcon: mdiMagnify,
			locales,
		};
	},
	computed: {
		filteredItems(): SearchListItem[] {
			if (this.search === null) {
				return this.items;
			}

			return this.items.filter((item) => {
				return item.label
					.toLowerCase()
					.includes((this.search as string).toLowerCase());
			});
		},
	},
	methods: {
		emitChangeEvent(value: unknown[]): void {
			this.$emit("change", value);
		},
	},
});
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

.vd-search-list .v-list-item--active::before {
	opacity: 0;
}
</style>
