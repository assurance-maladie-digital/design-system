<template>
	<VMenu offset-y>
		<template #activator="{ on, attrs }">
			<VBtn
				color="secondary"
				dark
				rounded
				v-bind="attrs"
				class="mr-2"
				style="text-transform:lowercase;"
				v-on="on"
			>
				{{ displayFiltersCount }}
				<VIcon
					color="white"
					class="ml-2"
					@click="resetFilters"
				>
					{{ closeIcon }}
				</VIcon>
			</VBtn>
		</template>
		<VList>
			<VListItem
				v-for="(item, index) in displayFiltersRow"
				:key="index"
			>
				<VListItemTitle>
					<div style="display: flex; align-items:center;">
						<div style="width:300px;">
							<div class="my-2">
								{{ item.filter.label }}
							</div>
							<div class="my-2">
								{{ `${item.filter.form.filter.value.value.length} ${item.filter.label} ${item.filter.form.filter.value.value.length > 1 ? 'sélectionnés' : 'sélectionné'}` }}
							</div>
						</div>
						<div
							class="mr-2"
							@click="editFilters(item.index)"
						>
							<VIcon
								color="black"
								class=""
							>
								{{ editIcon }}
							</VIcon>
						</div>
						<div
							class="mr-2"
							@click="clearFiltersRow(item.index)"
						>
							<VIcon
								color="black"
								class=""
							>
								{{ deleteIcon }}
							</VIcon>
						</div>
					</div>
				</VListItemTitle>
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiCloseCircle } from '@mdi/js';
	import { mdiWindowClose } from '@mdi/js';
	import { mdiPencil } from '@mdi/js';

	import { FilterItem } from '../../patterns/FilterModule/types';
	import { FilterManagerItem } from './types';

	const Props = Vue.extend({
		props: {
			appliedFilters: {
				type: Array as PropType<FilterItem[]>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FilterManager extends MixinsDeclaration {
		// Icon
		closeIcon = mdiCloseCircle;
		deleteIcon = mdiWindowClose;
		editIcon = mdiPencil;

		editFilters(index: number): void {
			this.$emit('edit-filters', index);
		}

		clearFiltersRow(index: number): void {
			this.$emit('clear-filters-row', index);
		}

		resetFilters(): void {
			this.$emit('reset-filters');
		}

		get displayFiltersRow(): FilterManagerItem[] {
			const displayedFilters: FilterManagerItem[] = [];
			this.appliedFilters.forEach((filter, index) => {
				let item = {
					index: index,
					filter: filter
				};
				filter.form.filter.value ? displayedFilters.push(item) : '';
			});
			return displayedFilters;
		}

		get displayFiltersCount(): string {
			return `${this.displayFiltersRow.length} ${this.displayFiltersRow.length > 1 ? 'filtres' : 'filtre'}`;
		}
	}
</script>

<style lang="scss" scoped>

</style>
