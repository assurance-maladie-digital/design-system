<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { config } from './config';
import { locales } from './locales';

import FilterManager from './FilterManager';
import FilterSelector from './FilterSelector';

import { customizable } from '@/mixins/customizable';

import { deepCopy } from '@/helpers/deepCopy';
import FormField from '@/form-builder/FormField/FormField.vue';
import type { Field } from '@/form-builder/FormField/types';
import DialogBox from '@/elements/DialogBox/DialogBox.vue';

export default defineComponent({
	components: {
		FilterManager,
		FilterSelector,
		FormField,
		DialogBox
	},
	props: {
		filters: {
			type: Array as PropType<Field[]>,
			required: true
		}
	},
	mixins: [customizable(config)],
	data() {
		return {
			locales: locales,
			dialog: false,
			filterIndex: null as number | null,
			filterTitle: null as  string | null,
			dialogContent: null as Field | null,
			appliedFilters: [] as Field[]
		};
	},
	computed: {
		filtersCount(): number {
			return this.appliedFilters.filter(item => item.value !== null).length;
		}
	},
	methods: {
		openDialog(index: number, filters: Field[]): void {
			this.filterIndex = index;

			const filter = filters[index];
			this.filterTitle = filter.fieldOptions?.filterTitle as string;
			this.dialogContent = filter;

			this.dialog = true;
		},
		applyFilter(): void {
			// for typescript to understand that this.filterIndex and this.dialogContent are not null
			if(this.filterIndex === null || this.dialogContent === null) {
				return;
			}

			if (this.appliedFilters.length === 0) {
				this.appliedFilters = deepCopy<Field[]>(this.filters);
			}

			this.appliedFilters[this.filterIndex] = this!.dialogContent;
			this.emitFilterListEvent();
			this.dialog = false;
		},
		clearFilter(index: number): void {
			this.appliedFilters[index].value = null;

			if (this.filtersCount === 0) {
				this.resetFilters();

				return;
			}

			this.emitFilterListEvent();
		},
		editFilter(index: number): void {
			this.openDialog(index, this.appliedFilters);
		},
		emitFilterListEvent(): void {
			this.$emit('filter-list', this.appliedFilters);
		},
		resetFilters(): void {
			this.appliedFilters = [];
			this.emitFilterListEvent();
		}
	}
});
</script>

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

		<DialogBox v-model="dialog" v-bind="options.dialog" :title="filterTitle">
			<VForm class="vd-filter-module-dialog-content d-flex flex-column" @submit.prevent="applyFilter">
				<FormField v-model="dialogContent as Field" />

				<div class="vd-filter-module-dialog-actions d-flex mt-10">
					<VSpacer v-bind="options.spacer" />

					<VBtn v-bind="options.validateBtn" @click="applyFilter">
						{{ locales.apply }}
					</VBtn>
				</div>
			</VForm>
		</DialogBox>
	</div>
</template>
