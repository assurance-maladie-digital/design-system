import { RawLocation } from 'vue-router';

export interface LinkItem {
	text: string;
	to?: RawLocation;
	href?: string;
}
