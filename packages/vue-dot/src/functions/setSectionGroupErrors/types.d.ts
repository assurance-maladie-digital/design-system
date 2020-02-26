import { ErrorMessages, PeriodErrorMessages } from '../../patterns/FormField/types';

export interface FormErrors {
	[key: string]: ErrorMessages | PeriodErrorMessages;
}
