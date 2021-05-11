export interface RangeFilterValue {
	filter: RangeFilterForm;
}

export interface RangeFilterForm {
	min: number;
	max: number;
	value: RangeValues;
}

export interface RangeValues {
	value: number[];
}
