export interface FilterItem {
	clearAfterValidate: boolean;
	limited: boolean;
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
