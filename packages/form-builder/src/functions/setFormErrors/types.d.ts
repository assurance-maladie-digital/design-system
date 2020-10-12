import { ErrorMessages, PeriodErrorMessages } from '../../components/FormField/types';

export interface FormErrors {
	[fieldName: string]: ErrorMessages | PeriodErrorMessages;
}
