export interface Field {
	type: string;
	metadata: object;
	value: string | number | null;
	// valueToSend?: string;
	items?: any[];
	// rules?: Rule[];
	// options?: any;
	// uri?: string;
	// dynamic?: boolean;
	mask?: string;
}

export interface Form {
	[key: string]: Field;
}
