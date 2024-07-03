import { Field } from '../FormField/types';

export interface Fields {
	[fieldName: string]: Field;
}

export interface FieldList {
	title?: string;
	description?: string;
	questions: Fields;
}
