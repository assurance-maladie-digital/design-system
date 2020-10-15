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
