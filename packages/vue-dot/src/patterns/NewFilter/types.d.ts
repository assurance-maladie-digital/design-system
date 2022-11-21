export interface FilterItem {
	clearAfterValidate: boolean;
	limited: boolean;
	splited: boolean;
	label: string;
	name: string;
	description: string;
	showAll: boolean;
	icon: string;
	selection: unknown[];
	chips: {
		value: unknown;
		text: string;
	}[];
	value: unknown;
	defaultValue: unknown;
	formatting?: (value: unknown) => string;
	style: string;
}
export interface ChipItem {
	text: string;
	value: unknown;
}
