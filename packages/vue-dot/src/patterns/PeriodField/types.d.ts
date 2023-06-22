export interface PeriodValue {
	from: string | null;
	to: string | null;
}

export type FieldValue = null | undefined | PeriodValue;

export type ErrorMessages = string | string[];

export interface PeriodErrorMessages {
	from?: ErrorMessages;
	to?: ErrorMessages;
}

export interface FieldOptions {
	errorMessages?: ErrorMessages | PeriodErrorMessages;
	[key: string]: unknown;
}

export interface Field {
	type: string;
	value?: FieldValue;
	title?: string;
	description?: string;
	tooltip?: string;
	fieldOptions?: FieldOptions;
}
