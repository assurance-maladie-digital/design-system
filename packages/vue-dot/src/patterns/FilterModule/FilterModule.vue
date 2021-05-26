<template>
	<div class="vd-filter-module">
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
			<FormField
				v-model="modalContent"
				@change="updateSelectedFilters"
			/>
			<template #actions>
				<VBtn
					color="primary"
					dark
					@click="applyFilter"
				>
					{{ locales.apply }}
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

	import FilterManager from './FilterManager';
	import FilterSelector from './FilterSelector';
	import FormField from '@cnamts/form-builder/src/components/FormField';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	import { deepCopy } from '../../helpers/deepCopy';

	const Props = Vue.extend({
		props: {
			filters: {
				type: Array as PropType<Field[]>,
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
			FilterManager,
			FilterSelector,
			FormField
		}
	})
	export default class FilterModule extends MixinsDeclaration {
		// Locales
		locales = locales;

		filterIndex: number | null = null;

		dialog = false;

		contentType: string | null = null;

		modalContent: Field | null = null;

		modalTitle: string | null = null;

		selectedFilters: Field | null = null;

		appliedFilters: Field[] | null = null;

		openModal(index: number): void {
			this.filterIndex = index;
			this.modalTitle = this.filters[index].fieldOptions?.modalTitle as string;
			this.contentType = this.filters[index].type;
			this.modalContent = this.filters[index];
			this.dialog = true;
		}

		applyFilter(): void {
			if (this.appliedFilters === null) {
				this.appliedFilters = deepCopy<Field[]>(this.filters);
			}
			if (this.filterIndex === null || this.selectedFilters === null) {
				return;
			}
			this.$set(this.appliedFilters, this.filterIndex,  this.selectedFilters);
			this.$emit('filter-list', this.appliedFilters);
			this.dialog = false;
		}

		clearFiltersRow(index: number): void {
			if (this.appliedFilters === null) {
				return;
			}
			this.$set(this.appliedFilters[index], 'value', null);
		}

		editFilters(index: number): void {
			if(this.appliedFilters === null) {
				return;
			}
			this.filterIndex = index;
			this.modalTitle = this.appliedFilters[index].fieldOptions?.modalTitle as string;
			this.contentType = this.appliedFilters[index].type;
			this.modalContent = this.appliedFilters[index];
			this.dialog = true;
		}

		resetFilters(): void {
			this.appliedFilters = null;
		}

		updateSelectedFilters(data: Field): void {
			this.selectedFilters = data;
		}

		get displayFiltersCount(): boolean {
			if(this.appliedFilters === null) {
				return false;
			}
			return this.appliedFilters.some(item => item.value !== null);
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
