import { Form } from '../../../../components/FormBuilder/types';
import { FormErrors } from '../../types';

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

export const formErrorsWrongTypes = {
	questionString: 4
} as FormErrors;

export const formErrors: FormErrors = {
	questionString: [
		'Erreur 1',
		'Erreur 2'
	],
	questionPassword: 'Erreur',
	questionPeriod: {
		from: [
			'Erreur from 1',
			'Erreur from 2'
		],
		to: [
			'Erreur to 1',
			'Erreur to 2'
		]
	},
	questionChoiceButton: [
		'Erreur 1',
		'Erreur 2'
	],
	questionChoiceButtonMultiple: 'Erreur',
	questionChoiceOtherSelected: {
		value: 'test',
		other: 'test'
	}
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
			},
			questionChoiceOtherSelected: {
				type: 'select',
				items: []
			}
		}
	}
};
