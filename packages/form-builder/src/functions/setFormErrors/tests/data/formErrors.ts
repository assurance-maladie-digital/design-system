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

/** FormErrors related to question form */
export const questionErrors: FormErrors = {
	questionString: [
		'Erreur string 1',
		'Erreur string 2'
	],
	questionPeriod: {
		from: [
			'Erreur questionPeriod 1',
			'Erreur questionPeriod 2'
		],
		to: [
			'Erreur questionPeriod 1',
			'Erreur questionPeriod 2'
		]
	}
};

export const form: Form = {
	section1: {
		fields: {
			questionString: {
				type: 'text'
			},
			questionPeriod: {
				type: 'period'
			}
		}
	}
};
