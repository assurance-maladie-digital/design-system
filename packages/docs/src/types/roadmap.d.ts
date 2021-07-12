export interface RoadmapItem {
	title: string;
	description?: string;
	label: string;
	issue?: string;
}

export interface RoadmapLabelMapping {
	[key: string]: {
		label: string;
		color: string;
	}
}
