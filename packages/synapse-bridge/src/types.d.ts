/**
 * Extend $refs, eg:
 * $refs!: Refs<{
 *  myProp: MyType
 * }>
 */
export type Refs<T extends Record<string, unknown>> = Vue['$refs'] & T

export interface IndexedObject<Type = string> {
	[key: string]: Type;
}

export interface VForm {
	validate: () => Promise<{
		valid: boolean
		errors?: IndexedObject<string[]>
	}>
	reset: () => void
	resetValidation: () => void
}
