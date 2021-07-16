export interface TreeviewItem {
	name: string;
	path?: string;
	file?: string;
	disabled?: boolean;
	children?: TreeviewItem[];
}
