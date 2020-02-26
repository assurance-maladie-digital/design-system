import { SectionGroup } from '../../types';
import { FormErrors } from './../../../../functions/setFormErrors/types.d';

/** the questionnaire for the test */
export const sectionGroup = {
		section1: {
			title: 'Section titre  1',
			questions: {
				question1: {
					type: 'date',
					title: 'Question id 1',
					description: 'Description de la question date',
					tooltip: 'Tooltip de la question date'
				}
			}
		},
		section2: {
			title: 'Section titre 2',
			questions: {
				question2: {
					type: 'text',
					dynamic: true,
					title: 'Question id 2',
					description: 'condition > 10',
					tooltip: 'Tooltip de la question text'
				}
			}
		}
} as SectionGroup;

export const sectionGroupErrorMessages: FormErrors = {
	question1: ['error', 'error2']
};
