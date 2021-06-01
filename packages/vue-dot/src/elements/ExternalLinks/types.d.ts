import { IndexedObject } from '../../types';

export interface ExternalLink {
	text: string;
	href: string;
}

export type StyleObject = IndexedObject<string | undefined>;
