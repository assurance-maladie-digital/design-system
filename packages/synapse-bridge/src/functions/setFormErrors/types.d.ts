import {
	ChoiceFieldErrorMessages,
	ErrorMessages,
	PeriodErrorMessages,
} from '@/form-builder/FormField/types'

export interface FormErrors {
	[fieldName: string]:
		| ErrorMessages
		| ChoiceFieldErrorMessages
		| PeriodErrorMessages
}
