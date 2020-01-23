import { Form } from '../../../../patterns/FormBuilder/types';
import { FormErrors } from '../../types';

/** FormErrors with invalid values */
export const formErrors = {
	fieldNameNotExist: [
		'Field name does not exist'
	],
	questionString: 'Incorrect value',
	questionPeriod: {
		notExist: 'Sub field does not exist'
	}
} as FormErrors;

/** FormErrors related to question form */
export const questionErrors = {
	questionString: [
		'error string 1',
		'error string 2'
	],
	questionPeriod: {
		from: [
			'Error questionPeriod 1',
			'Error questionPeriod 2'
		],
		to: [
			'Error questionPeriod to 1',
			'Error questionPeriod to 2'
		]
	}
} as FormErrors;

export const form = {
	questionString: {
		type: 'string'
	},
	questionPeriod: {
		type: 'period'
	}
} as Form;
