export type FieldValue = string | number | PeriodValue | null | undefined;

export interface Field {
	type: string;
	value?: FieldValue;
	title?: string;
	description?: string;
	tooltip?: string;
	metadata?: any;
	items?: any[];
	mask?: string;
}

export interface PeriodValue {
	from: string | null;
	to: string | null;
}

export interface Form {
	[key: string]: Field;
}
