export interface QuestionItem {
	name: string;
	type: string;
	question: string;
	labels?: string[];
}

export interface StepItem {
	step: string;
	result: string | number | null;
}

export interface AfterValidateItem {
	message: string;
	greenBackground: boolean;
}
