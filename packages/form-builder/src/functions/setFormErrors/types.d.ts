import { ChoiceFieldErrorMessages, ErrorMessages, PeriodErrorMessages } from '../../components/FormField/types';

export interface FormErrors {
	[fieldName: string]: ErrorMessages | ChoiceFieldErrorMessages | PeriodErrorMessages;
}
