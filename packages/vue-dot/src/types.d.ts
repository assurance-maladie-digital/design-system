import Vue from 'vue';

/**
 * Extend $refs, eg:
 * $refs!: Refs<{
 *  myProp: MyType;
 * }>;
 */
export type Refs<T extends Record<string, unknown>> = Vue['$refs'] & T;

export interface IndexedObject<T = string> {
	[key: string]: T;
}
