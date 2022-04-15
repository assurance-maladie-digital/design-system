type Lvl = string | null;

interface SearchHierarchy {
	lvl0: Lvl;
	lvl1: Lvl;
	lvl2: Lvl;
	lvl3: Lvl;
	lvl4: Lvl;
	lvl5: Lvl;
	lvl6: Lvl;
	[key: string]: Lvl;
}

interface SearchMatchedResult {
	matchLevel: 'none' | 'full' | 'partial';
	matchedWords: string[];
	value: string;
	fullyHighlighted?: boolean;
}

interface SearchHighlightResultHierarchy {
	[key: string]: SearchMatchedResult;
}

interface SearchHighlightResult {
	hierarchy: SearchHighlightResultHierarchy;
	hierarchy_camel: SearchHighlightResultHierarchy[];
	content?: SearchMatchedResult;
}

export interface SearchHit {
	anchor: string;
	content: string | null;
	hierarchy: SearchHierarchy;
	objectID: string;
	type: string;
	url: string;
	url_without_anchor: string;
	_highlightResult: SearchHighlightResult;
}

export interface SearchResult {
	exhaustiveNbHits: boolean;
	exhaustiveTypo: boolean;
	hits: SearchHit[];
	hitsPerPage: number;
	nbHits: number;
	nbPages: number;
	page: number;
	params: string;
	processingTimeMS: number;
	query: string;
}

export interface SearchResultFormattedItem {
	breadcrumb: string | null;
	content: string | null;
	href: string;
}

export interface SearchResultFormatted {
	items: SearchResultFormattedItem[];
	title: string;
	content: string;
	href?: string;
}

