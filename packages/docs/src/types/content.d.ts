import { Context } from '@nuxt/types';
import { contentFunc, IContentDocumentBase } from '@nuxt/content/types/content';

export type ContentFunction = contentFunc;
export type ContentDocument = IContentDocumentBase;

export interface AsyncDataParams extends Context {
	$content: ContentFunction;
}

export type Content = ContentDocument[];

export interface SurroundItems {
	prev: ContentDocument;
	next: ContentDocument;
}

export interface PageData extends SurroundItems {
	document: ContentDocument;
}

export { Context };
