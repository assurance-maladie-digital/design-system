import Vue from 'vue'

/**
 * Extend $refs, eg:
 * $refs!: Refs<{
 *  myProp: MyType
 * }>
 */
export type Refs<Type extends Record<string, unknown>> = Vue['$refs'] & Type

export interface IndexedObject<Type = string> {
	[key: string]: Type
}
