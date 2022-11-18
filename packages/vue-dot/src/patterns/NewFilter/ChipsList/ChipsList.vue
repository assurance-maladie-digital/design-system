<template>
	<VChipGroup
		class="vd-chips-list mb-4"
		column
	>
		<VChip
			v-for="(chip, chipIndex) in limitChips(filter)"
			:key="chipIndex"
			small
			close
			class="mt-2"
			:close-icon="deleteIcon"
			color="cyan-darken-40"
			text-color="white"
			@click:close="removeChip(chipIndex)"
		>
			{{ chip.text ?? chip.value ?? chip }}
		</VChip>
		<VChip
			v-if="showExpandChip"
			small
			outlined
			color="cyan-lighten-60"
			text-color="cyan-darken-40"
			class="mt-2 bg-cyan"
			@click.stop="displayHiddenChips"
		>
			{{ `+${filter.chips.length - chipsLimit}` }}
		</VChip>
		<VChip
			v-if="filter.showAll"
			small
			outlined
			color="cyan-lighten-60"
			text-color="cyan-darken-40"
			class="mt-2 bg-cyan"
			@click.stop="() => onHideAll()"
		>
			<VIcon>
				{{ upIcon }}
			</VIcon>
		</VChip>
		<VChip
			v-if="filter.chips.length"
			class="text-none align-self-center mt-2"
			x-small
			text
			color="primary"
			@click.stop="resetFilter"
		>
			{{ locales.reset }}
		</VChip>
	</VChipGroup>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';
	import { locales } from '../locales';
	import { FilterItem } from '../types';
	import { mdiChevronUp, mdiChevronDown, mdiWindowClose } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			filter: {
				type: Object as PropType<FilterItem>,
				required: true
			},
			chipsLimit: {
				type: Number,
				required: true
			}
		}
	});

	@Component
	export default class ChipsList extends Props {
		locales = locales;
		deleteIcon = mdiWindowClose;
		upIcon = mdiChevronUp;
		downIcon = mdiChevronDown;

		get showExpandChip(): boolean {
			const currentFilter = this.filter;
			return !currentFilter.showAll && (currentFilter.chips.length > this.chipsLimit);
		}

		limitChips(filterItem: FilterItem): unknown[] {
			if (filterItem.showAll) {
				return filterItem.chips;
			}

			return filterItem.chips.slice(0, this.chipsLimit);
		}

		removeChip(chipIndex: number): void {
			const chips = this.filter.chips.filter((chip, index) => index !== chipIndex);
			this.$set(this.filter, 'chips', chips);
			this.$emit('remove');
		}

		displayHiddenChips(): void {
			this.$set(this.filter, 'showAll', true);
		}

		resetFilter(): void {
			this.$set(this.filter, 'chips', []);
		}

		onHideAll(): void {
			this.$set(this.filter, 'showAll', !this.filter.showAll);
		}
	}
</script>
