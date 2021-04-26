<template>
	<div
		class="vd-filter-module"
	>
		<FilterManager
			v-if="displayFiltersCount"
			:applyed-filters="applyedFilters"
			@edit-filters="openModal"
			@clear-filters-row="clearFiltersRow"
			@reset-filters="resetFilters"
		/>
		<FilterSelector
			:filters="filters"
			@filter-selected="openModal"
		/>
		<v-dialog
			v-model="dialog"
			max-width="300px"
		>
			<v-card>
				<v-card-text>
					<v-card-title />
					<FormFieldList
						v-model="modalContent"
						@change="updateSelectedFilters"
					/>
					<v-card-actions class="vd-filter-action">
						<v-btn
							color="primary"
							dark
							@click="applyFilter"
						>
							Appliquer le filtre
						</v-btn>
					</v-card-actions>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import FormFieldList from '@cnamts/form-builder/src/components/FormFieldList';

	const Props = Vue.extend({
		props: {
			filters: {
				type: Array,
				default: undefined,
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

		filterIndex = undefined;

		dialog = false;

		modalContent = null;

		selectedFilters = undefined;

		applyedFilters = null;

		openModal(index: number): void {
			this.filterIndex = index;
			this.modalContent = this.filters[index].form;
			this.dialog = true;
		}

		applyFilter(): void {
			if (this.applyedFilters === null) {
				this.applyedFilters = this.filters;
			}
			this.applyedFilters[this.filterIndex].form.filterList = this.selectedFilters.filterList;
			this.$emit('filter-list', this.selectedFilters);
			this.dialog = false;
			this.modalContent = null;
		}

		clearFiltersRow(index: number): void {
			this.applyedFilters[index].form.filterList = this.filters[index].form.filterList;
		}

		resetFilters(): void {
			this.applyedFilters = null;
		}

		updateSelectedFilters(data: string): void {
			this.selectedFilters = data;
		}

		get displayFiltersCount(): boolean {
			return this.applyedFilters === null ? false : true;
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
