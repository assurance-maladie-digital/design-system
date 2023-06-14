export interface FilterItem {
	clearAfterValidate: boolean;
	limited: boolean;
	splitted: boolean;
	label: string;
	name: string;
	description: string;
	showAll: boolean;
	icon: string;
	selection: unknown[];
	chips: ChipItem[];
	value: any;
	defaultValue: unknown;
	formatting?: (value: unknown) => string;
	style: string;
}

export interface ChipItem {
	text: string;
	value: unknown;
}
