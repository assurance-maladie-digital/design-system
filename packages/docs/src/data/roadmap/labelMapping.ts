import { RoadmapLabelMapping } from '~/types/roadmap';
import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';

import { tokens } from '@cnamts/design-tokens';

export const labelMapping: RoadmapLabelMapping = {
	[LabelMappingEnum.NEW]: {
		label: 'Nouveauté',
		color: tokens.colors.cyan.base
	},
	[LabelMappingEnum.DOCUMENTATION]: {
		label: 'Documentation',
		color: tokens.colors.mauve.base
	},
	[LabelMappingEnum.REFACTORING]: {
		label: 'Refonte',
		color: tokens.colors.green.darken20
	}
};
