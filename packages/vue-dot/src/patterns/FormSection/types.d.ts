import { Field } from '../FormField/types';

export interface FieldGroup {
	[key: string]: Field;
}

export interface Section {
	title?: string;
	questions: FieldGroup;
}

// Field and FieldGroup
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
