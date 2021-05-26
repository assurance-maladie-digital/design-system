interface PageItem {
	title: string;
	icon?: string;
	href?: string;
	to?: string;
	items?: PageItem[];
}

export interface DrawerItem {
	title: string;
	icon: string;
	items: PageItem[];
}

export interface SurroundItemsPaths {
	prevPath?: string;
	nextPath?: string;
}
