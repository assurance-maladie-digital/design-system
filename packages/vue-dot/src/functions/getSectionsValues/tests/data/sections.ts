import { Sections } from '../../types';

export const sectionsNull = {
	sectionId1: {
		titre: 'section1',
		questions: {
			quetionId1: {
				type: 'number',
				title: 'question 1 ?'
			}
		}
	},
	sectionId2: {
		titre: 'section2',
		questions: {
			quetionId2: {
				type: 'number',
				title: 'question 2 ?'
			}
		}
	}
} as Sections;

export const sectionsNotNull = {
	sectionId1: {
		titre: 'section1',
		questions: {
			quetionId1: {
				type: 'number',
				title: 'question 1 ?',
				value: 1
			}
		}
	},
	sectionId2: {
		titre: 'section2',
		questions: {
			quetionId2: {
				type: 'number',
				title: 'question 2 ?',
				value: 2
			}
		}
	}
} as Sections;
