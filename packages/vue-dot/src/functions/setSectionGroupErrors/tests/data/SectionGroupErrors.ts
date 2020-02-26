import { FormErrors } from '../../types';
import { SectionGroup } from 'src/patterns/FormSectionGroup/types';

/** FormErrors with invalid values */
export const incorrectFormErrors = {
	fieldNameNotExist: [
		'Field name does not exist'
	],
	questionString: 'Incorrect value',
	questionPeriod: {
		notExist: 'Sub field does not exist'
	}
}as FormErrors;

/** FormErrors related to question fieldGroup */
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

export const sectionGroup: SectionGroup = {
	section1: {
		questions: {
			questionString: {
				type: 'text'
			}
		}
	},
	section2: {
		questions: {
			questionPeriod: {
				type: 'period'
			}
		}
	}
};
