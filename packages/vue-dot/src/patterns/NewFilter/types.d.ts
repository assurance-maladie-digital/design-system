export interface FilterItem {
	clearAfterValidate: boolean;
	limited: boolean;
	label: string;
	name: string;
	description: string;
	showAll: boolean;
	selection: unknown[];
	chips: {
		value: unknown;
		text: string;
	}[];
	value: any;
	defaultValue: any;
	formatting?: (value: unknown) => string;
	style: string;
}
