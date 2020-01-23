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

/** FromErrors related to question form */
export const questionErrors = {
	questionString: [
		'error string 1',
		'error string 2'
	],
	questionTextarea: [
		'error textarea 1',
		'error textarea 2'
	],
	questionNumber: [
		'error number 1',
		'error number 2'
	],
	questionSelect: [
		'error select 1',
		'error select 2'
	],
	questionSelectMultiple: [
		'error select multiple 1',
		'error select multiple 2'
	],
	questionSelectSliderTick: [
		'error select slider 1',
		'error select slider 2'
	],
	questionDate: [
		'error date 1',
		'error date 2'
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
