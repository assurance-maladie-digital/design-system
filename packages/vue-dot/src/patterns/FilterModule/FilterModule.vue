<template>
	<div class="vd-filter-module">
		<FilterManager
			v-if="filtersCount"
			:applied-filters="appliedFilters"
			@edit-filter="editFilter"
			@clear-filter="clearFilter"
			@reset-filters="resetFilters"
		/>

		<FilterSelector
			:filters="filters"
			@filter-selected="openDialog($event, filters)"
		/>

		<DialogBox
			v-model="dialog"
			v-bind="options.dialog"
			:title="filterTitle"
		>
			<FormField v-model="dialogContent" />

			<template #actions>
				<VBtn
					v-bind="options.validateBtn"
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

	import FilterManager from './FilterManager';
	import FilterSelector from './FilterSelector';

	import { customizable } from '../../mixins/customizable';

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

	const MixinsDeclaration = mixins(Props, customizable(config));

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

		dialogContent: Field | null = null;

		filterTitle: string | null = null;

		appliedFilters: Field[] | null = null;

		get filtersCount(): number {
			if (this.appliedFilters === null) {
				return 0;
			}

			return this.appliedFilters.filter(item => item.value !== null).length;
		}

		openDialog(index: number, filters: Field[]): void {
			const filter = filters[index];
			this.filterIndex = index;
			this.filterTitle = filter.fieldOptions?.filterTitle as string;
			this.dialogContent = filter;
			this.dialog = true;
		}

		applyFilter(): void {
			if (this.filterIndex === null || this.dialogContent === null) {
				return;
			}

			if (this.appliedFilters === null) {
				this.appliedFilters = deepCopy<Field[]>(this.filters);
			}

			this.$set(this.appliedFilters, this.filterIndex, this.dialogContent);
			this.$emit('filter-list', this.appliedFilters);
			this.dialog = false;
		}

		clearFilter(index: number): void {
			if (this.appliedFilters === null) {
				return;
			}

			this.$set(this.appliedFilters[index], 'value', null);

			if (this.filtersCount === 0) {
				this.resetFilters();
				return;
			}
		}

		editFilter(index: number): void {
			if (this.appliedFilters === null) {
				return;
			}

			this.openDialog(index, this.appliedFilters);
		}

		resetFilters(): void {
			this.appliedFilters = null;
		}
	}
</script>
