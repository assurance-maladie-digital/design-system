<template>
	<div class="vd-filters-inline d-flex flex-wrap max-width-none ma-n2">
		<VMenu
			v-for="filter in filters"
			:key="filter.name"
			:close-on-content-click="false"
			min-width="300px"
			max-width="400px"
			offset-y
			nudge-bottom="10px"
		>
			<template #activator="{ on }">
				<VBtn
					:class="`vd-filter-${filter.name}`"
					:outlined="!getFilterCount(filter)"
					color="secondary"
					depressed
					rounded
					class="ma-2"
					v-on="on"
				>
					<VBadge
						v-if="getFilterCount(filter)"
						:content="getFilterCount(filter)"
						:label="locales.badgeLabel(getFilterCount(filter))"
						color="white"
						inline
						class="ml-n1 mr-1"
					/>

					{{ filter.title }}

					<VIcon
						small
						class="ml-1"
					>
						{{ downIcon }}
					</VIcon>
				</VBtn>
			</template>

			<VSheet
				background="white"
				class="pa-4"
			>
				<ChipList
					:items="getChips(filter)"
					:overflow-limit="filter.chipOverflowLimit"
					class="mb-5"
					@remove="removeChip(filter, $event)"
					@reset="resetFilter(filter)"
				/>

				<slot
					:on="{
						input: value => {
							$set(filter, 'value', value);
							updateValue();
						},
						change: value => {
							$set(filter, 'value', value);
							updateValue();
						}
					}"
					:attrs="{
						value: filter.value
					}"
					:name="`${formatFilterName(filter.name)}`"
				/>
			</VSheet>
		</VMenu>
	</div>
</template>

<script lang="ts">
	import Component from 'vue-class-component';

	import { locales } from './locales';

	import { Filterable } from '../../mixins/filterable';

	import { mdiChevronDown } from '@mdi/js';

	@Component
	export default class FiltersInline extends Filterable {
		locales = locales;

		downIcon = mdiChevronDown;
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.v-badge :deep(.v-badge__badge) {
		color: $vd-secondary !important;
	}
</style>
