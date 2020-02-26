import { ErrorMessages, PeriodErrorMessages } from '../../patterns/FormField/types.d';

export interface FormErrors {
	[key: string]: ErrorMessages | PeriodErrorMessages;
}

export const enum FormTypeEnum {
	FORM = 'form',
	SECTION_GROUP = 'section_group'
}

export type FormType = 'form' | 'section_group';
