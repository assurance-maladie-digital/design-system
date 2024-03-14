import { RawLocation } from "vue-router";

export interface NavigationItem {
	label: string;
	href?: string;
	to?: RawLocation;
}
