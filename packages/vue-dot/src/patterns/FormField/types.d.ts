export interface PeriodValue {
	from: string | null;
	to: string | null;
}

export type ErrorMessages = string[];

export interface PeriodErrorMessages {
	from?: ErrorMessages;
	to?: ErrorMessages
}

export type FieldValue = string | number | PeriodValue | null | undefined;

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
	items?: any[];
	mask?: string;
}
