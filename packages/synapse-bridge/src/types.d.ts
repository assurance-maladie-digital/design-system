import Vue from 'vue'
import { NavigationGuardNext } from 'vue-router'

/**
 * Extend $refs, eg:
 * $refs!: Refs<{
 *  myProp: MyType;
 * }>;
 */
export type Refs<Type extends Record<string, unknown>> = Vue['$refs'] & Type

export interface IndexedObject<Type = string> {
	[key: string]: Type
}

export type Next = NavigationGuardNext<Vue>;

export interface Dimensions {
	width: string;
	height: string;
}

export interface VForm {
	validate: () => boolean;
	reset: () => void;
	resetValidation: () => void;
}

interface InputFacadeEventTarget extends EventTarget {
	unmaskedValue: string;
}

export interface InputFacadeEvent extends Event {
	target: InputFacadeEventTarget;
}
