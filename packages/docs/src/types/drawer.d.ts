export interface DrawerItem {
	title?: string;
	icon?: string;
	heading?: string;
	href?: string;
	to?: string;
	items?: DrawerItem[];
	item?: boolean;
	divider?: boolean;
	appendIcon?: string;
}

export interface SurroundItemsPaths {
	prevPath?: string;
	nextPath?: string;
}
