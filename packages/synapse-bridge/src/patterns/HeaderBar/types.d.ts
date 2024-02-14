import { RawLocation } from "vue-router";

export interface NavigationItem {
	href?: string;
	label: string;
	to?: RawLocation;
}
