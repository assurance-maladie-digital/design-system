export interface PeriodValue {
	from: string | null;
	to: string | null;
}

export type FieldItemValue = string | number | null | undefined;

export type ChoiceValue = FieldItemValue | FieldItemValue[];

export type FieldValue = string | number | null | undefined | PeriodValue | ChoiceValue;

export type ErrorMessages = string[];

export interface PeriodErrorMessages {
	from?: ErrorMessages;
	to?: ErrorMessages
}

export interface FieldItem {
	text: string,
	value: FieldItemValue;
	alone?: boolean;
}

export interface FieldMetadata {
	errorMessages?: ErrorMessages | PeriodErrorMessages;
	[key: string]: any;
}

export interface Field {
	type: string;
	value?: FieldValue;
	title?: string;
	description?: string;
	tooltip?: string;
	metadata?: FieldMetadata;
	items?: FieldItem[];
	mask?: string;
	multiple?: boolean;
	dynamic?: boolean;
}
