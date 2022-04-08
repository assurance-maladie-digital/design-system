export interface LogoInfo {
	src: string;
	alt: string;
}

interface HighlightedTitle {
	text: string;
	highlight: string;
}

export interface Service {
	title: string | HighlightedTitle;
	subTitle: string;
}
