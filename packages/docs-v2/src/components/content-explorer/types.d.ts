export interface TreeviewItem {
	name: string;
	path: string;
	file?: string;
	children?: TreeviewItem[];
}
