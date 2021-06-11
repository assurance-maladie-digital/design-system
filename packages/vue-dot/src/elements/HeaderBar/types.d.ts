export interface NavBarItem {
	label: string;
	link: string;
}

export interface NavBar {
	title: string | null;
	menu?: NavBarItem[];
}
export interface ServiceItem {
	name?: string;
	baseLine?: string;
}

export interface HeaderConfig {
	service?: ServiceItem;
	navBar?: NavBar;
}