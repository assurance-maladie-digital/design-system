import { Field } from '../../FormField/types';

export interface Fields {
	[fieldName: string]: Field;
}

export interface Section {
	title?: string;
	questions: Fields;
}
