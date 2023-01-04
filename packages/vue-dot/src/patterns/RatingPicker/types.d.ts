export interface QuestionItem {
	name: string;
	type: string;
	labels?: string[];
	question: string;
}

export interface StepItem {
	step: string;
	result: string | number | null;
}
