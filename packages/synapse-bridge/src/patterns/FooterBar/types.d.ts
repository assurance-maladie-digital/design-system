import { RawLocation } from 'vue-router';

export interface LinkItem {
	text: string;
	to?: RawLocation;
	href?: string;
	ariaLabel?: string;
	openInNewTab?: boolean;
}
