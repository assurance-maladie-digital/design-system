import { Form } from '../../../../components/FormBuilder/types';
import { FormErrors } from '../../types';

/** FormErrors with invalid values */
export const formErrors = {
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
export const questionErrors: FormErrors = {
	questionString: [
		'Erreur string 1',
		'Erreur string 2'
	],
	questionPassword: 'Champ requis',
	questionPeriod: {
		from: [
			'Erreur questionPeriod 1',
			'Erreur questionPeriod 2'
		],
		to: [
			'Erreur questionPeriod 1',
			'Erreur questionPeriod 2'
		]
	},
	questionChoiceButton: [
		'Erreur 1',
		'Erreur 2'
	],
	questionChoiceButtonMultiple: 'Erreur string'
};

const defaultItems = [
	{
		text: '10h',
		value: 10
	},
	{
		text: '11h',
		value: 11
	}
];

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
				items: defaultItems,
				fieldOptions: {
					type: 'choiceButton'
				}
			},
			questionChoiceButtonMultiple: {
				type: 'select',
				items: defaultItems,
				fieldOptions: {
					type: 'choiceButton'
				}
			}
		}
	}
};
