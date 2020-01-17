export type FieldValue = string | string[] | number | PeriodValue | null | undefined;

export interface Field {
	type: string;
	value?: FieldValue;
	title?: string;
	description?: string;
	tooltip?: string;
	metadata?: any;
	items?: FieldItem[];
	mask?: string;
}

export interface FieldItem {
	text: string,
	value: string | number | null | undefined;
	[key: string]: any;
}

export interface PeriodValue {
	from: string | null;
	to: string | null;
}
