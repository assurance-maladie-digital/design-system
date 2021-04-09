import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';
import { FormValues } from '@cnamts/form-builder/src/functions/getFormValues/types';

export type ColumnValue = number | string | null;

export type FilterValueText<T = FormValues> = (formValues: T) => string | null;
export type FilterFn = (value: ColumnValue, formValues: FormValues) => boolean;

export interface FilterStructure {
	fields: Fields;
	valueToString: FilterValueText;
	filter: FilterFn;
}

export interface FilterStructures {
	[typeName: string]: FilterStructure;
}

export type FilterType = 'text' | 'date' | 'number';

export interface Row {
	[key: string]: ColumnValue;
}

export type Rows = Row[];

export interface Filter {
	label: string;
	type: FilterType;
}

export interface Filters {
	[filterName: string]: Filter;
}

export interface ActiveFilter {
	filterName: string;
	label: string;
	text: string;
	type: FilterType;
	values: FormValues;
}

export type ActiveFilters = ActiveFilter[];
