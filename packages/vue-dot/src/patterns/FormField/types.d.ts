export interface Field {
	type: string;
	value: string | number | null;
	title?: string;
	description?: string;
	tooltip?: string;
	metadata?: object;
	items?: any[];
	mask?: string;
}

export interface Form {
	[key: string]: Field;
}
