export type Value = string | null
export type ValidationResult = string | boolean
export type ValidationRule = () => ValidationResult

export interface ValidationRules {
	[key: string]: ValidationRule
}

export type GenericFnOpt = () => string
export type GenericFn = () => string

export interface ErrorMessages<T = string> {
	[key: string]: GenericFn<T> | GenericFnOpt<T> | string
}
