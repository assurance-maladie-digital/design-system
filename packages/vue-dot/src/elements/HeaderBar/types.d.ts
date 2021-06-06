export interface NavBarItem {
	label: string;
	link: string;
}

export interface NavBar {
	title: string;
    pro: boolean;
	menu?: NavBarItem[];
}