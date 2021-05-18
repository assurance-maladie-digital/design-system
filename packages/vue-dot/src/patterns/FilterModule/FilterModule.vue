<template>
	<div
		class="vd-filter-module"
	>
		<FilterManager
			v-if="displayFiltersCount"
			:applied-filters="appliedFilters"
			@edit-filters="editFilters"
			@clear-filters-row="clearFiltersRow"
			@reset-filters="resetFilters"
		/>
		<FilterSelector
			:filters="filters"
			@filter-selected="openModal"
		/>
		<DialogBox
			v-model="dialog"
			width="400px"
			:title="modalTitle"
			@cancel="dialog = false"
			@confirm="dialog = false"
		>
			<div v-if="contentType === 'select'">
				<FormFieldList
					v-model="modalContent"
					@change="updateSelectedFilters"
				/>
			</div>
			<div v-else-if="contentType === 'range'">
				<RangeFilter
					v-model="modalContent"
					@change="updateSelectedFilters"
				/>
			</div>
			<div v-else-if="contentType === 'date'">
				<PeriodFilter
					v-model="modalContent"
					@change="updateSelectedFilters"
				/>
			</div>
			<template #actions>
				<VBtn
					color="primary"
					dark
					@click="applyFilter"
				>
					Appliquer le filtre
				</VBtn>
			</template>
		</DialogBox>
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

	import { deepCopy } from '../../helpers/deepCopy';

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

		contentType: string | null = null;

		modalContent: FilterItemForm | null = null;

		modalTitle: string | null = null;

		selectedFilters: Fields | null = null;

		appliedFilters: FilterItem[] | null = null;

		openModal(index: number): void {
			this.filterIndex = index;
			this.modalTitle = this.filters[index].label;
			this.contentType = this.filters[index].type;
			this.modalContent = this.filters[index].form;
			this.dialog = true;
		}

		applyFilter(): void {
			if (this.appliedFilters === null) {
				this.appliedFilters = deepCopy<FilterItem[]>(this.filters);
			}
			if (this.filterIndex === null || this.selectedFilters === null) {
				return;
			}
			this.appliedFilters[this.filterIndex].form.filter = this.selectedFilters.filter;
			this.$emit('filter-list', this.appliedFilters);
			this.dialog = false;
			this.modalContent = null;
			this.modalTitle = null;
		}

		clearFiltersRow(index: number): void {
			if (this.appliedFilters === null) {
				return;
			}
			this.$set(this.appliedFilters[index].form.filter, 'value', null);
		}

		editFilters(index: number): void {
			if(this.appliedFilters === null) {
				return;
			}
			this.filterIndex = index;
			this.modalTitle = this.appliedFilters[index].label;
			this.contentType = this.appliedFilters[index].type;
			this.modalContent = this.appliedFilters[index].form;
			this.dialog = true;
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
			return this.appliedFilters.some(item => item.form.filter.value !== null);
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
				justify-content: flex-end;
			}
		}
	}
</style>
