export interface FilterItem {
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
	miseEnForm?: (value: unknown) => string;
}
