export interface ValidationRules {
	[key: string]: (value: string) => string | boolean;
}
