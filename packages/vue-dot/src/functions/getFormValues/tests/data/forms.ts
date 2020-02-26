import { Form } from '../../../../patterns/FormSection/types';
import { SectionGroup } from 'src/patterns/FormSectionGroup/types';

const defaultItem = [
	{
		text: 'bis',
		value: 1
	},
	{
		text: 'ter',
		value: 2
	},
	{
		text: 'quarter',
		value: 3
	}
];

export const formNull = {
	streetNumber: {
		type: 'number',
		value: null,
		mask: '#####',
		metadata: {
			type: 'text',
			label: 'Numéro de voie'
		}
	},
	streetNumberComplement: {
		type: 'select',
		value: null,
		items: defaultItem,
		metadata: {
			label: 'Complément de voie'
		}
	},
	streetLabel: {
		type: 'text',
		value: null,
		metadata: {
			label: 'Libellé de la voie'
		}
	}
} as Form;

export const formNotNull = {
	streetNumber: {
		type: 'number',
		value: 1,
		mask: '#####'
	},
	streetNumberComplement: {
		type: 'select',
		value: 'bis',
		items: defaultItem
	},
	streetLabel: {
		type: 'text',
		value: 'streetLabel'
	}
} as Form;

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
