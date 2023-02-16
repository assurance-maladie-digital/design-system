export interface StepItem {
	step: string;
	result: string | number | null;
}

export interface AfterValidateItem {
	message: string;
	error: string;
	greenBackground: boolean;
	redBackground: boolean;
}
