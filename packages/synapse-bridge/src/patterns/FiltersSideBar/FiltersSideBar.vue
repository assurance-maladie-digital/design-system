<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { Filterable } from '@/mixins/filterable';
import type { FilterItem } from '@/mixins/filterable/types';

import { locales } from './locales';

import { mdiFilterVariant } from '@mdi/js';
import ChipList from "@/elements/ChipList";

export default defineComponent({
	mixins: [Filterable],
	components: {
		ChipList
	},
	props: {
		modelValue: {
			type: Array as PropType<FilterItem[]>,
			default: () => []
		}
	},
	data() {
		return {
			drawer: false,
			locales,
			filterIcon: mdiFilterVariant
		};
	},
	computed: {
		activeFiltersCount(): number {
			return this.modelValue.reduce((count, filter) => {
				return count + this.getFilterCount(filter);
			}, 0);
		}
	},
	methods: {
		toggleDrawer(): void {
			this.drawer = !this.drawer;
		},

		applyFilters(): void {
			this.updateValue();
			this.drawer = false;
		}
	}
});
</script>

<template>
	<div class="vd-filters-side-bar">
		<VBtn
			:class="{ 'v-btn--active': drawer }"
			color="primary"
			variant="text"
			rounded
			class="px-2"
			@click="toggleDrawer"
		>
			<VBadge
				v-if="activeFiltersCount"
				:content="activeFiltersCount"
				:label="locales.badgeLabel(activeFiltersCount)"
				color="secondary"
				inline
				class="ml-n1 mr-1"
			/>

			{{ locales.filterBtnLabel }}

			<VIcon
				class="ml-2"
				size="small"
			>
				{{ filterIcon }}
			</VIcon>
		</VBtn>

		<VNavigationDrawer
			:modelValue="drawer"
			sticky
			temporary
			location="right"
			rounded="0"
			:scrim="false"
			rail
			rail-width="395"
			disable-resize-watcher
			class="elevation-6"
		>
			<VExpansionPanels
				variant="accordion"
			>
				<VExpansionPanel
					v-for="filter in filters"
					:key="filter.name"
					:class="`vd-filter-${filter.name}`"
					tile
					elevation="0"
				>
					<VExpansionPanelTitle class="text-subtitle-2">
						{{ filter.title }}

						<span
							v-if="getFilterCount(filter)"
							class="ml-1"
						>
							({{ getFilterCount(filter) }})
						</span>
					</VExpansionPanelTitle>

					<VExpansionPanelText>
						<ChipList
							:items="getChips(filter)"
							:overflow-limit="filter.chipOverflowLimit"
							class="mb-5"
							@remove="removeChip(filter, $event)"
							@reset="resetFilter(filter)"
						/>

						<slot
							:name="`${formatFilterName(filter.name)}`"
							:attrs="{
								modelValue: filter.value,
								'onUpdate:modelValue': (value: unknown) => filter.value = value
							}"
						/>
					</VExpansionPanelText>
				</VExpansionPanel>
			</VExpansionPanels>

			<VSpacer />

			<div class="px-4 pb-4 pt-10">
				<VBtn
					color="primary"
					block
					size="large"
					variant="outlined"
					class="mb-4"
					@click="drawer = false"
				>
					{{ locales.close }}
				</VBtn>

				<VBtn
					color="primary"
					block
					size="large"
					variant="outlined"
					class="mb-4"
					@click.stop="resetAllFilters"
				>
					{{ locales.reset }}
				</VBtn>

				<VBtn
					block
					size="large"
					color="primary"
					@click.stop="applyFilters"
				>
					{{ locales.apply }}
				</VBtn>
			</div>
		</VNavigationDrawer>
	</div>
</template>

<style lang="scss" scoped>
	.vd-filters-side-bar :deep() {

		.v-navigation-drawer {
			&__content {
				display: flex;
				flex-direction: column;
			}

			&__border {
				display: none;
			}
		}

		.v-expansion-panel {
			border-bottom: 1px solid rgba(0, 0, 0, 0.12);
		}

		.v-expansion-panel:not(:first-child)::after {
			display: none;
		}
	}
</style>
