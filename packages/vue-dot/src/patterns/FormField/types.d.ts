export interface Field {
	type: string;
	value: string | number | PeriodeValue | null;
	title?: string;
	description?: string;
	tooltip?: string;
	metadata?: any;
	items?: any[];
	mask?: string;
}

export interface PeriodeValue {
	from?: string,
	to?: string
}

export interface Form {
	[key: string]: Field;
}
