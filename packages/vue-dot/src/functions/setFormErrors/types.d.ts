import { ErrorMessages, PeriodErrorMessages } from '../../patterns/FormField/types';

export interface FormErrors {
	[fieldName: string]: ErrorMessages | PeriodErrorMessages;
}
