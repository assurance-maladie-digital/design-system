import { SectionGroup } from 'src/patterns/FormSectionGroup/types';
import { Form } from '../../../../patterns/FormSection/types';
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
export const questionErrors: FormErrors = {
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
};

export const form: Form = {
	questionString: {
		type: 'text'
	},
	questionPeriod: {
		type: 'period'
	}
};

/** the section group for the test */
export const sectionGroup = {
	section1: {
		title: 'Section 1',
		questions: {
			questionString: {
				type: 'date',
				title: 'Question 1',
				description: 'Description de la question date',
				tooltip: 'Tooltip de la question date'
			}
		}
	},
	section2: {
		title: 'Section 2',
		questions: {
			questionPeriod: {
				type: 'period',
				dynamic: true,
				title: 'Question 2',
				tooltip: 'Tooltip de la question text'
			}
		}
	}
} as SectionGroup;
