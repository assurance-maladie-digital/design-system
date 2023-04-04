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
	chips: ChipItem[];
	value: unknown;
	defaultValue: unknown;
	formatting?: (value: unknown) => string | undefined;
	style: string;
}
export interface ChipItem {
	text: string;
	value: unknown;
}
