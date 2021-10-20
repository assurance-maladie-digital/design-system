import { Route } from 'vue-router';

export interface NavigationItem {
	label: string;
	to?: string | Route;
	href?: string | Route;
}
