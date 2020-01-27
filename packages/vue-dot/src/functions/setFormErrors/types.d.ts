import { ErrorMessages, PeriodErrorMessages } from '../../patterns/FormField/types.d';

export interface FormErrors {
	[key: string]: ErrorMessages | PeriodErrorMessages;
}
