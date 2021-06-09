export interface NavBarItem {
	label: string;
	link: string;
}

export interface NavBar {
	title: string | null;
    pro: boolean;
	menu?: NavBarItem[];
}
export interface ServiceItem {
	name?: string;
	baseLine?: string;
}

export interface HeaderConfig {
	type?: string;
	service?: ServiceItem;
	navBar?: NavBar;
}