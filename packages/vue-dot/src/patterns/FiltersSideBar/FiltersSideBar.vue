<template>
	<div class="vd-filters-side-bar">
		<VBtn
			:class="{ 'v-btn--active': drawer }"
			color="primary"
			text
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
				small
			>
				{{ filterIcon }}
			</VIcon>
		</VBtn>

		<VNavigationDrawer
			v-model="drawer"
			fixed
			right
			temporary
			hide-overlay
			width="395px"
			class="elevation-6"
		>
			<VExpansionPanels
				accordion
				flat
			>
				<VExpansionPanel
					v-for="filter in filters"
					:key="filter.name"
					:class="`vd-filter-${filter.name}`"
				>
					<VExpansionPanelHeader class="text-subtitle-2">
						{{ filter.title }}

						<span
							v-if="getFilterCount(filter)"
							class="ml-1"
						>
							({{ getFilterCount(filter) }})
						</span>
					</VExpansionPanelHeader>

					<VExpansionPanelContent>
						<ChipList
							:items="getChips(filter)"
							:overflow-limit="filter.chipOverflowLimit"
							class="mb-5"
							@remove="removeChip(filter, $event)"
							@reset="resetFilter(filter)"
						/>

						<slot
							:on="{
								input: value => $set(filter, 'value', value),
								change: value => $set(filter, 'value', value)
							}"
							:attrs="{
								value: filter.value
							}"
							:name="`${formatFilterName(filter.name)}`"
						/>
					</VExpansionPanelContent>
				</VExpansionPanel>
			</VExpansionPanels>

			<VSpacer />

			<div class="px-4 pb-4 pt-10">
				<VBtn
					color="primary"
					block
					large
					outlined
					class="mb-4"
					@click="drawer = false"
				>
					{{ locales.close }}
				</VBtn>

				<VBtn
					color="primary"
					block
					large
					outlined
					class="mb-4"
					@click.stop="resetAllFilters"
				>
					{{ locales.reset }}
				</VBtn>

				<VBtn
					block
					large
					color="primary"
					@click.stop="applyFilters"
				>
					{{ locales.apply }}
				</VBtn>
			</div>
		</VNavigationDrawer>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Filterable } from '../../mixins/filterable';
	import { FilterItem } from '../../mixins/filterable/types';

	import { locales } from './locales';

	import { mdiFilterVariant } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<FilterItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props, Filterable);

	@Component
	export default class FiltersSideBar extends MixinsDeclaration {
		locales = locales;
		filterIcon = mdiFilterVariant;

		drawer = false;

		get activeFiltersCount(): number {
			return this.value.reduce((count, filter) => {
				return count + this.getFilterCount(filter);
			}, 0);
		}

		toggleDrawer(): void {
			this.drawer = !this.drawer;
		}

		applyFilters(): void {
			this.updateValue();
			this.drawer = false;
		}
	}
</script>

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

		.v-expansion-panels--flat {
			border-radius: 0;
		}

		.v-expansion-panel {
			border-bottom: 1px solid rgba(0, 0, 0, 0.12);
		}
	}
</style>
