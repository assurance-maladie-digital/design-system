interface PageItem {
	title: string;
	icon?: string;
	href?: string;
	to?: string;
}

export interface DrawerItem {
	title: string;
	icon: string;
	items: PageItem[];
}
