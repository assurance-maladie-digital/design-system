import Vue from 'vue';
import { NavigationGuardNext } from 'vue-router';

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

export type Next = NavigationGuardNext<Vue>;

export interface Dimensions {
	width: string;
	height: string;
}

export interface FormRef {
	validate: () => boolean;
	reset: () => void;
	resetValidation: () => void;
}
