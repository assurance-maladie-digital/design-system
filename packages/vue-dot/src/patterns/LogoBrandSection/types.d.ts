import { NavigationGuardNext } from 'vue-router';

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

export interface Dimensions {
	width: string;
	height: string;
}

export type Next = NavigationGuardNext<Vue>;

export interface IndexedObject<T = string> {
	[key: string]: T;
}
