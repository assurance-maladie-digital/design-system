
import algoliasearch from 'algoliasearch';
import { SearchResult } from './types';

const searchClient = algoliasearch(
	process.env.SEARCH_APP_ID as string,
	process.env.SEARCH_API_KEY as string,
	)
	.initIndex(process.env.SEARCH_INDEX as string);

export function search(value: string): Promise<SearchResult> {
	return searchClient.search(
		value,
		{
			hitsPerPage: 1000,
			highlightPreTag: '<mark>',
			highlightPostTag: '</mark>',
			minWordSizefor1Typo: 10,
			minWordSizefor2Typos: 10
		}
	) as Promise<SearchResult>;
}
