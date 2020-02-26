import { FieldValue } from '../../patterns/FormField/types';

export interface FormValues {
	[key: string]: FieldValue;
}

export const enum FormTypeEnum {
	FORM = 'form',
	SECTION_GROUP = 'section_group'
}

export type FormType = 'form' | 'section_group';
