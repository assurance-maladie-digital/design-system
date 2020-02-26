import { SectionGroup } from '../../types';

/** the section group for the test */
export const sectionGroup = {
		section1: {
			title: 'Section 1',
			questions: {
				question1: {
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
				question2: {
					type: 'text',
					dynamic: true,
					title: 'Question 2',
					tooltip: 'Tooltip de la question text'
				}
			}
		}
} as SectionGroup;
