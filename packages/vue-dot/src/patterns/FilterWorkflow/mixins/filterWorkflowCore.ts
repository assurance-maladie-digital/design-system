import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { getFormValues } from '@cnamts/form-builder/src/functions/getFormValues';
import { FormValues } from '@cnamts/form-builder/src/functions/getFormValues/types';
import { Form } from '@cnamts/form-builder/src/components/FormBuilder/types';
import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';

import { filterStructures } from '../filterStructures';
import { FilterTypesEnum } from '../enums';
import { ActiveFilters, Filter, Filters, Row, Rows, FilterStructure } from '../types';

import { deepCopy } from '@cnamts/vue-dot/src/helpers/deepCopy';

const Props = Vue.extend({
	props: {
		filters: {
			type: Object as PropType<Filters>,
			required: true
		},
		rows: {
			type: Array as PropType<Rows>,
			default: () => []
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Handle main logic of the FormBuilder */
@Component<FilterWorkflowCore>({
	watch: {
		filters: {
			handler() {
				this.filterItems();
			}
		},
		rows: {
			handler() {
				this.filterItems();
			},
			immediate: true
		}
	}
})
export class FilterWorkflowCore extends MixinsDeclaration {
	filterDialog = false;

	activeFilters: ActiveFilters = [];

	filterTypeEdit: FilterStructure | null = null;
	filterEditName: string | null = null;
	filterEditLabel: string | null = null;

	/**
	 * Open the filter dialog
	 *
	 * @param {string} filterName The filter to add or edit
	 */
	openFilterDialog(filterName: string): void {
		const filter: Filter = this.filters[filterName];

		if (!filter) {
			return;
		}

		this.filterTypeEdit = filterStructures[filter.type];
		this.filterEditLabel = filter.label;
		this.filterEditName = filterName;

		const activeFilter = this.activeFilters.find((activeFilter) => {
			return activeFilter.filterName === filterName;
		});

		// Set the value of the active filter to the edited filter fields
		if (activeFilter) {
			for (const [fieldName, value] of Object.entries(activeFilter.values)) {
				this.$set(this.filterTypeEdit.fields[fieldName], 'value', value);
			}
		}

		// If type text, set items to the select field
		if (filter.type === FilterTypesEnum.TEXT) {
			const selectItems = this.rows.map((row) => row[filterName]);

			// Set the field select label with the filter label
			const fieldOptions = this.filterTypeEdit.fields.select.fieldOptions;
			if (fieldOptions) {
				this.$set(fieldOptions, 'label', filter.label );
			}

			this.$set(this.filterTypeEdit.fields.select, 'items', selectItems);
		}

		this.$nextTick(() => {
			this.filterDialog = true;
		});
	}

	/**
	 * Remove the selected filter
	 *
	 * @param {number} index of the filter in the list of the active filters
	 */
	deleteFilter(index: number): void {
		this.activeFilters.splice(index, 1);

		this.$nextTick(() => {
			this.filterItems();
		});
	}

	deleteAllFilters(): void {
		this.activeFilters = [];
		this.filterTypeEdit = null;
		this.filterEditName = null;

		this.$nextTick(() => {
			this.filterItems();
		});
	}

	/**
	 * Save the new fields value of the current editing filter
	 *
	 * @param {Fields} fields The updated fields from the FormFieldList
	 */
	fieldsUpdated(fields: Fields): void {
		if (!this.filterTypeEdit) {
			return;
		}
		this.filterTypeEdit.fields = fields;
	}

	/** Apply the editing filter */
	applyFilter(): void {
		if (!this.filterEditName || !this.filterTypeEdit) {
			return;
		}

		const filterType = this.filterTypeEdit;

		// Construct form from multiple fields structure for get values
		const form: Form = {
			section: {
				questions : filterType.fields
			}
		};

		const values: FormValues = getFormValues(form);

		const filter: Filter = this.filters[this.filterEditName];

		const activeFilterIndex = this.activeFilters.findIndex((activeFilter) => {
			return activeFilter.filterName === this.filterEditName;
		});

		const valueText = filterType.valueToString(values);

		if (valueText && values) {
			const activeFilterData = {
				filterName: this.filterEditName,
				label: filter.label,
				text: valueText,
				values,
				type: filter.type
			};

			// Update the activate filter if it's already set
			if (activeFilterIndex >= 0) {
				this.activeFilters[activeFilterIndex] = activeFilterData;
			} else {
				this.activeFilters.push(activeFilterData);
			}

			this.filterItems();
		} else if (activeFilterIndex >= 0) {
			// delete the active filter if the new have no valueText or values
			this.deleteFilter(activeFilterIndex);
		}

		this.filterDialog = false;
	}

	/** Filter the rows with the current active filters */
	filterItems(): void {
		let filteredItems: Rows = deepCopy(this.rows);

		filteredItems = filteredItems.filter((row) => {
			return this.checkItemValues(row);
		});

		this.$emit('change', filteredItems);
	}

	/** Check all values of the row with all the corresponding active filter */
	checkItemValues(row: Row): boolean {
		for (const activeFilter of this.activeFilters) {
			const filter = filterStructures[activeFilter.type];
			const value = row[activeFilter.filterName];

			// Check the table column value corresponding to the activate filter value
			if (!filter.filter(value, activeFilter.values)) {
				return false;
			}
		}

		return true;
	}
}
