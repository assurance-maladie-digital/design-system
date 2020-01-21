export interface PeriodValue {
	from: string | null;
	to: string | null;
}

export type FieldItemValue = string | number | null | undefined;

export type ChoiceValue = FieldItemValue | FieldItemValue[];

export type FieldValue = string | string[] | number | number[] | PeriodValue | null | undefined | ChoiceValue;

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
	value: FieldItemValue;
	alone?: boolean;
}
