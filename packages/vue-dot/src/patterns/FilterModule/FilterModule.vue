<template>
	<div
		class="vd-filter-module"
	>
		<FilterManager
			v-if="displayFiltersCount"
			:applied-filters="appliedFilters"
			@edit-filters="openModal"
			@clear-filters-row="clearFiltersRow"
			@reset-filters="resetFilters"
		/>
		<FilterSelector
			:filters="filters"
			@filter-selected="openModal"
		/>
		<VDialog
			v-model="dialog"
			max-width="300px"
		>
			<VCard>
				<VCardText>
					<VCardTitle />
					<FormFieldList
						v-model="modalContent"
						@change="updateSelectedFilters"
					/>
					<VCardActions class="vd-filter-action">
						<VBtn
							color="primary"
							dark
							@click="applyFilter"
						>
							Appliquer le filtre
						</VBtn>
					</VCardActions>
				</VCardText>
			</VCard>
		</VDialog>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import FormFieldList from '@cnamts/form-builder/src/components/FormFieldList';

	import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';
	import { FilterItem, FilterItemForm } from './types';

	const Props = Vue.extend({
		props: {
			filters: {
				type: Array as PropType<FilterItem[]>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(
		Props,
		customizable(config)
	);

	@Component({
		components: {
			FormFieldList
		}
	})
	export default class FilterModule extends MixinsDeclaration {
		// Locales
		locales = locales;

		filterIndex: number | null = null;

		dialog = false;

		modalContent: FilterItemForm | null = null;

		selectedFilters: Fields | null = null;

		appliedFilters: FilterItem[] | null = null;

		openModal(index: number): void {
			this.filterIndex = index;
			this.modalContent = this.filters[index].form;
			this.dialog = true;
		}

		applyFilter(): void {
			if (this.appliedFilters === null) {
				this.appliedFilters = this.filters;
			}
			if (this.filterIndex === null || this.selectedFilters === null) {
				return;
			}
			this.appliedFilters[this.filterIndex].form.filter = this.selectedFilters.filter;
			this.$emit('filter-list', this.appliedFilters);
			this.dialog = false;
			this.modalContent = null;
		}

		clearFiltersRow(index: number): void {
			if (this.appliedFilters === null) {
				return;
			}
			this.appliedFilters[index].form.filter.value = null;
		}

		resetFilters(): void {
			this.appliedFilters = null;
		}

		updateSelectedFilters(data: Fields): void {
			this.selectedFilters = data;
		}

		get displayFiltersCount(): boolean {
			if(this.appliedFilters === null) {
				return false;
			}
			return !this.appliedFilters.every(item => {
				item.form.filter.value === null;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-filter {
			&-module {
				margin-right: 2rem;
			}
			&-action {
				display: flex;
				justify-content: center;
			}
		}
	}
</style>
