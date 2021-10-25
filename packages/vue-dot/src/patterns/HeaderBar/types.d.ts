import { RawLocation } from 'vue-router';

export interface NavigationItem {
	label: string;
	to?: RawLocation;
	href?: string;
}
