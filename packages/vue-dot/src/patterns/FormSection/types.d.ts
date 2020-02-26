import { Field } from '../FormField/types';

export interface Form {
	[key: string]: Field;
}

export interface Section {
	title?: string;
	questions: Form;
}

// Field and Form
interface ComputedField extends Field {
	name: string;
}

export interface ComputedForm {
	[key: string]: Field;
}

// Layout
export interface LayoutItem {
	fields: string[];
	type: string;
}

export type Layout = LayoutItem[];

// ComputedLayout
export interface ComputedLayoutItem {
	fields: ComputedField[];
	type: string;
}

export type ComputedLayout = ComputedLayoutItem[];
