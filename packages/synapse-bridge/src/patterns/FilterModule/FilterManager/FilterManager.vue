<template>
	<VMenu v-bind="options.menu" attach>
		<template #activator="{ on, attrs }">
			<VBtn
				v-bind="{
					...attrs,
					...options.closeBtn,
				}"
				v-on="on"
			>
				{{ filtersCount }}

				<VIcon v-bind="options.closeIcon" @click="resetFilters">
					{{ closeIcon }}
				</VIcon>
			</VBtn>
		</template>

		<VList v-bind="options.list">
			<VListItem
				v-for="(item, index) in filters"
				:key="index"
				v-bind="options.listItem"
			>
				<div class="d-flex align-center">
					<div class="vd-filter-manager my-2">
						{{ item.filter.fieldOptions.filterTitle }}
					</div>

					<VBtn
						v-bind="options.editBtn"
						@click="editFilter(item.index)"
					>
						<VIcon v-bind="options.editIcon">
							{{ editIcon }}
						</VIcon>
					</VBtn>

					<VBtn
						v-bind="options.deleteBtn"
						@click="clearFilter(item.index)"
					>
						<VIcon v-bind="options.deleteIcon">
							{{ deleteIcon }}
						</VIcon>
					</VBtn>
				</div>
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

import { mdiCloseCircle, mdiWindowClose, mdiPencil } from "@mdi/js";

import { Field } from '@cnamts/form-builder/src/components/FormField/types';
import { FilterManagerItem } from "./types";

const Props = {
	props: {
		appliedFilters: {
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
			closeIcon: mdiCloseCircle,
			deleteIcon: mdiWindowClose,
			editIcon: mdiPencil
		}
	},
	computed: {
		filters(): FilterManagerItem[] {
			const displayedFilters: FilterManagerItem[] = [];

			this.appliedFilters.forEach((filter, index) => {
				const item = {
					index,
					filter
				};

				if (filter.value) {
					displayedFilters.push(item);
				}
			});

			return displayedFilters;
		},

		filtersCount(): string {
			const plural = this.filters.length > 1;

			return `${this.filters.length} ${locales.filter(plural)}`;
		}
	},
	methods: {
		editFilter(index: number): void {
			this.$emit('edit-filter', index);
		},

		clearFilter(index: number): void {
			this.$emit('clear-filter', index);
		},

		resetFilters(): void {
			this.$emit('reset-filters');
		}
	}
});
</script>

<style lang="scss" scoped>
.vd-filter-manager {
	width: 300px;
}
</style>
