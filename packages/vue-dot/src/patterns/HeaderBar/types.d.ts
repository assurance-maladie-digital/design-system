export interface HeaderTitleItem {
	text: string;
	mobileDisplay?: boolean;
}

export interface HeaderTitleSection {
	title: HeaderTitleItem;
	subTitle: HeaderTitleItem;
	mobileDisplay?: boolean;
}

export interface HeaderBarConfig {
	bgColor?: string;
	boxSize?: string;
	dark?: boolean;
	service?: HeaderTitleSection;
}

export interface HeaderNavBarConfig {
	bgColor?: string;
	dark?: boolean;
}
