export interface PeriodValue {
	from: string | null;
	to: string | null;
}

export interface RangeValue {
	min: number | null;
	max: number | null;
}

export type FieldItemValue = string | number | null | undefined;

export type OtherFieldValue = string | null;

export type ChoiceFieldValue = FieldItemValue | FieldItemValue[];

export interface ChoiceValue {
	value: ChoiceFieldValue;
	other?: OtherFieldValue;
}

export type FieldValue = string | number | null | undefined | PeriodValue | ChoiceValue | number[];

export type ErrorMessages = string | string[];

export interface ChoiceFieldErrorMessages {
	value?: ErrorMessages;
	other?: ErrorMessages;
}

export interface PeriodErrorMessages {
	from?: ErrorMessages;
	to?: ErrorMessages;
}

export interface FieldItem {
	text: string,
	value: FieldItemValue;
	alone?: boolean;
}

export interface FieldOptions {
	errorMessages?: ErrorMessages | ChoiceFieldErrorMessages | PeriodErrorMessages;
	[key: string]: unknown;
}

export interface OtherField {
	label?: string;
	fieldOptions?: FieldOptions;
	selectedChoice?: FieldItemValue;
}

export interface Field {
	type: string;
	value?: FieldValue;
	title?: string;
	min?: number;
	max?: number;
	description?: string;
	tooltip?: string;
	multiple?: boolean;
	fieldOptions?: FieldOptions;
	items?: FieldItem[];
	other?: OtherField;
	mask?: string;
	dynamic?: boolean;
}
