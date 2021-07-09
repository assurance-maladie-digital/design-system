export interface RoadMapItem {
	title: string;
	description: string;
	label: string;
	issue?: string;
}

export interface RoadMapLabelMapping {
	[key: string]: {
		label: string;
		color: string;
	}
}
