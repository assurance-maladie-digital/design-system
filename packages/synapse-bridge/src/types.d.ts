/**
 * Extend $refs, eg:
 * $refs!: Refs<{
 *  myProp: MyType;
 * }>;
 */
export type Refs<T extends Record<string, unknown>> = Vue["$refs"] & T;

export interface IndexedObject<Type = string> {
	[key: string]: Type;
}

export interface VForm {
	validate: () => boolean;
	reset: () => void;
	resetValidation: () => void;
}
