export interface DrawerItem {
	title: string;
	icon?: string;
	href?: string;
	to?: string;
	items?: DrawerItem[];
}

export interface SurroundItemsPaths {
	prevPath?: string;
	nextPath?: string;
}
