export interface FilterItem {
	clearAfterValidate: boolean;
	limited: boolean;
	label: string;
	name: string;
	description: string;
	selection: unknown[];
	showAll: boolean;
	chips: {
		value: unknown;
		text: string;
	}[];
	value: any;
	defaultValue: any;
	miseEnForm?: (value: unknown) => string;
}
