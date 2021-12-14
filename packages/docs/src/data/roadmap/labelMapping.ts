import { RoadmapLabelMapping } from '~/types/roadmap';
import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';

export const labelMapping: RoadmapLabelMapping = {
	[LabelMappingEnum.NEW]: {
		label: 'Nouveauté',
		color: '#00a5df'
	},
	[LabelMappingEnum.DOCUMENTATION]: {
		label: 'Documentation',
		color: '#a05bb6'
	},
	[LabelMappingEnum.REFACTORING]: {
		label: 'Refonte',
		color: '#459b5a'
	}
};
