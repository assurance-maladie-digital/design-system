export type ValidationRule = (value: string) => string | boolean;

export interface ValidationRules {
	[key: string]: (value: string) => string | boolean;
}

type FunctionRule = (arg?: any) => string;

export interface ErrorMessages {
	[key: string]: FunctionRule | string;
}
