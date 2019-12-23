export interface Field {
	type: string;
	value: string | number | PeriodValue | null;
	title?: string;
	description?: string;
	tooltip?: string;
	metadata?: any;
	items?: any[];
	mask?: string;
}

export interface PeriodValue {
	from?: string,
	to?: string
}

export interface Form {
	[key: string]: Field;
}
