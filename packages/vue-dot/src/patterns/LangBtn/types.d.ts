import { IndexedObject } from '../../types';

export interface Language {
	direction: string;
	name: string;
	nativeName: string;
}

export type Languages = IndexedObject<Language>;
export type AllLanguagesChar = '*';

export interface CurrentLangData {
	name: string;
	label: string;
}
