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
			<template #activator="{ props }">
				<VBtn
					:class="`vd-filter-${filter.name}`"
					:variant="getFilterCount(filter) ? undefined : 'outlined'"
					color="secondary"
					rounded
					class="ma-2"
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
						size="small"
						class="ml-1"
					>
						{{ downIcon }}
					</VIcon>
				</VBtn>
			</template>

			<VSheet
				color="white"
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
						input: value => filter['value'] = value,
						change: value => filter['value'] = value,
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
import { defineComponent } from "vue";

import { locales } from './locales';

import { Filterable } from '../../mixins/filterable';

import { mdiChevronDown } from '@mdi/js';

export default defineComponent({
	name: 'FiltersInline',
	mixins: [Filterable],
	data() {
		return {
			locales,
			downIcon: mdiChevronDown
		};
	}
});
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.v-badge :deep(.v-badge__badge) {
		color: $vd-secondary !important;
	}
</style>
