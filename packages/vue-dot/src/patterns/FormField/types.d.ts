export interface PeriodValue {
	from: string | null;
	to: string | null;
}

export type FieldItemValue = string | number | null | undefined;

export type OtherValue = string | null ;

export type MoreValue = string | null;

export type ChoiceValue = FieldItemValue | FieldItemValue[];

export interface TypeSelectValue {
	value: ChoiceValue;
	other?: OtherValue;
	more?: MoreValue;
}

export type FieldValue = string | number | null | undefined | PeriodValue | TypeSelectValue;

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

export interface OtherField {
	label: string;
	selectedChoice: FieldItemValue;
	metadata?: FieldMetadata;
}

export interface Field {
	type: string;
	value?: FieldValue;
	title?: string;
	description?: string;
	tooltip?: string;
	metadata?: FieldMetadata;
	items?: FieldItem[];
	other?: OtherField;
	more?: FieldMetadata;
	mask?: string;
	dynamic?: boolean;
}
