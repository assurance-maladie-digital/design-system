export type Value = string | null;
export type ValidationResult = string | boolean;
export type ValidationRule<T = Value> = (value: T) => ValidationResult;

export interface ValidationRules {
	[key: string]: ValidationRule;
}

export type GenericFnOpt<T> = (arg?: T) => string;
export type GenericFn<T> = (arg: T) => string;

export interface ErrorMessages<T = string> {
	[key: string]: GenericFn<T> | GenericFnOpt<T> | string;
}
