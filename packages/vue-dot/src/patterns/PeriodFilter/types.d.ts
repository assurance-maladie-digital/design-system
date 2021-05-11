export interface PeriodFilterValue {
	filter: PeriodFilterForm;
}

export interface PeriodFilterForm {
	startDate: string;
	endDate: string;
	value: PeriodValues;
}

export interface PeriodValues {
	value: string[];
}
