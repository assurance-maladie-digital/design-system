export interface RouterLinkItem {
	label: string;
	to?: string;
}

export interface RouterLinkItemGroup {
	[key: string]: RouterLinkItem[];
}
