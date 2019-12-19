interface LayoutMapItem {
	component: string;
	numberOfFields: number;
}

export interface ILayoutMap {
	[key: string]: LayoutMapItem;
}
