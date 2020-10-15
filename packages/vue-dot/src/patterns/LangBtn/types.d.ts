interface Language {
	direction: string;
	name: string;
	nativeName: string;
}

export interface Languages {
	// 'key' is the code of the language
	[key: string]: Language;
}

export type AllLanguagesChar = '*';

export interface CurrentLangData {
	name: string;
	label: string;
}
