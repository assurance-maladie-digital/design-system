import {
	SearchHit,
	SearchResult,
	SearchResultFormatted
} from '~/services/search/types';

const defaultSuffix = process.env.SEARCH_DEFAULT_SUFFIX as string;
const maxLengthBeforeHit = parseInt(process.env.SEARCH_MAX_LENGTH_BEFORE_HIT as string, 10);
const maxLengthAfterHit = parseInt(process.env.SEARCH_MAX_LENGTH_AFTER_HIT as string, 10);
const hightlightTag = process.env.SEARCH_HIGHLIGHT_TAG as string;

export function formatSearchData({ hits }: SearchResult): SearchResultFormatted[] {
	const hitsWithoutLvl0 = hits.filter(hit => hit._highlightResult.hierarchy.lvl0.matchLevel !== 'full');
	const groups = groupByLvl(hitsWithoutLvl0);

	return groups;
}

function groupByLvl(hits: SearchHit[]): SearchResultFormatted[] {
	let items: SearchResultFormatted[] = [];

	hits.forEach(hit => {
		const isTitle = hit.hierarchy?.lvl2 === null;
		const isTitlePresent = items.some(item => item.title === removeSuffix(hit.hierarchy.lvl1));

		if (isTitle && isTitlePresent) {
			items = items.map(item => {
				if (item.title !== hit.hierarchy.lvl1) {
					return item;
				}

				const { items, content, title } = item;

				return {
					content,
					href: hit.url,
					items,
					title
				};
			});
		}

		if (isTitle && !isTitlePresent) {
			items.push({
				href: hit.url,
				title: removeSuffix(hit.hierarchy.lvl1) as string,
				content: removeSuffix(hit._highlightResult.hierarchy.lvl1.value) as string,
				items: []
			});
		}

		if (!isTitle && isTitlePresent) {
			items.forEach(item => {
				if (
					item.title === hit.hierarchy.lvl1
					|| hit._highlightResult.hierarchy.lvl1.matchLevel === 'full'
				) {
					item.items.push({
						href: hit.url,
						breadcrumb: getBreadcrumb(hit),
						content: getContent(hit)
					});
				}
			});
		}

		if (!isTitle && !isTitlePresent) {
			items.push({
				href: undefined,
				title: removeSuffix(hit.hierarchy.lvl1) as string,
				content: removeSuffix(hit._highlightResult.hierarchy.lvl1.value) as string,
				items: [
					{
						breadcrumb: getBreadcrumb(hit),
						content: getContent(hit),
						href: hit.url
					}
				]
			});
		}

	});

	return items;
}

function getBreadcrumb(hit: SearchHit): string | null {
	const elements = getBreadcrumbElements(hit);

	if (elements.length === 0) {
		return null;
	}

	return elements.join('&nbsp;&sol;&nbsp;');
}

function getBreadcrumbElements({ _highlightResult }: SearchHit): string[] {
	let breadCrumbElements: string[] = [];

	Object.entries(_highlightResult.hierarchy).forEach(([key, { value }]) => {
		if (value && key !== 'lvl0' && key !== 'lvl1') {
			breadCrumbElements.push(value);
		}
	});

	return breadCrumbElements;
}

function getContent(hit: SearchHit): string | null {
	let value = null;

	if (hit.type === 'content') {
		value = hit._highlightResult?.content?.value ?? null;
	} else {
		value = hit._highlightResult.hierarchy[hit.type].value;
	}

	const breadcrumbLastElement = getBreadcrumbElements(hit).pop();
	if (breadcrumbLastElement === value) {
		return null;
	}

	return truncateContent(value);
}

function removeSuffix(value: string | null, suffix = defaultSuffix): string | null {
	return value?.replace(suffix, '') ?? value;
}


function truncateContent(value: string | null): string | null {
	if (!value) {
		return value;
	}

	const startTag = `<${hightlightTag}>`;
	const endTag = `</${hightlightTag}>`;

	let valueTruncated = value;

	const startingIndex = valueTruncated.indexOf(startTag);
	if (startingIndex > maxLengthBeforeHit) {
		valueTruncated = '&mldr;' + valueTruncated.slice(startingIndex - startTag.length - maxLengthBeforeHit).trim();
	}

	const endingIndex = valueTruncated.indexOf(endTag);
	if (endingIndex < (valueTruncated.length - maxLengthAfterHit)) {
		valueTruncated = valueTruncated.slice(0, endingIndex + endTag.length + maxLengthAfterHit).trim() + '&mldr;';
	}

	return valueTruncated;
}
