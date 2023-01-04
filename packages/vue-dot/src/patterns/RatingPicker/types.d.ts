export interface QuestionItem {
	name: string;
	type: string;
	question: string;
}

export interface StepItem {
	step: string;
	result: string | number | null;
}
