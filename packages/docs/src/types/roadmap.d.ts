import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';

export interface RoadmapItem {
	title: string;
	description?: string;
	label: LabelMappingEnum;
	issue?: number;
}

export interface RoadmapLabelMapping {
	[key: string]: {
		label: string;
		color: string;
	}
}

export interface RoadmapSection {
	version: string;
	date: string;
	description: string;
	items: RoadmapItem[];
}
