declare module 'languages' {
	import type { Language } from './types.d.ts';

	export function getLanguageInfo(langCode: string): Language;
	export function getAllLanguageCode(): string[];
};
