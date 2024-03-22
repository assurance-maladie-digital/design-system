export type SelectBtnValue = string | number | Array<string | number> | null;

export interface SelectBtnItem {
	text: string;
	value: string | number;
	unique?: boolean;
}
