export interface QuestionData {
	title: string;
	type: string;
	value: any;
	description?: string;
	tooltip?: string;
	metadata?: {
		[key: string]: any;
	};
}

export interface ComponentMap {
	[key: string]: string;
}
