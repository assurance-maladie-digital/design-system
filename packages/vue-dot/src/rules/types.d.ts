export type ValidationRule = (value: string) => string | boolean;

export interface ValidationRules {
	[key: string]: (value: string) => string | boolean;
}

export interface ErrorMessages {
	[key: string]: string;
}
