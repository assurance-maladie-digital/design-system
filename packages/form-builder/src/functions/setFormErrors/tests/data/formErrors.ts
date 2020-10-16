import { Form } from '../../../../components/FormBuilder/types';
import { FormErrors } from '../../types';

/** FormErrors with invalid values */
export const formErrorsInvalidValues = {
	fieldNameNotExist: [
		'Field name does not exist'
	],
	questionString: 'Incorrect value',
	questionPeriod: {
		notExist: 'Sub field does not exist'
	},
	notExist: [
		'Field does not exist'
	]
} as FormErrors;

/** FormErrors with wrong types */
export const formErrorsWrongTypes = {
	questionString: 4
} as FormErrors;

/** FormErrors related to question form */
export const formErrors: FormErrors = {
	questionString: [
		'Erreur 1',
		'Erreur 2'
	],
	questionPassword: 'Erreur',
	questionPeriod: {
		from: [
			'Erreur 1',
			'Erreur 2'
		],
		to: [
			'Erreur 1',
			'Erreur 2'
		]
	},
	questionChoiceButton: [
		'Erreur 1',
		'Erreur 2'
	],
	questionChoiceButtonMultiple: 'Erreur'
};

export const form: Form = {
	section1: {
		questions: {
			questionString: {
				type: 'text'
			},
			questionPassword: {
				type: 'password'
			},
			questionPeriod: {
				type: 'period'
			},
			questionChoiceButton: {
				type: 'select',
				items: [],
				fieldOptions: {
					type: 'choiceButton'
				}
			},
			questionChoiceButtonMultiple: {
				type: 'select',
				items: [],
				fieldOptions: {
					type: 'choiceButton'
				}
			}
		}
	}
};
