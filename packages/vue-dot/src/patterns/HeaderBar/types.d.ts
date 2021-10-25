import { Next } from '../../types';

export interface NavigationItem {
	label: string;
	to?: Next;
	href?: string;
}
