import { RoadmapLabelMapping } from '~/types/roadmap';
import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';

export const labelMapping: RoadmapLabelMapping = {
	[LabelMappingEnum.NEW]: {
		label: 'Nouveauté',
		color: 'indigo lighten-1'
	},
	[LabelMappingEnum.DOCUMENTATION]: {
		label: 'Documentation',
		color: 'blue'
	},
	[LabelMappingEnum.REFACTORING]: {
		label: 'Refonte',
		color: 'purple accent-2'
	}
};
