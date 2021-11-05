import { slugify } from '~/functions/slugify';
import { DocumentElement } from '~/types/content';

/** @see https://github.com/nuxt/content/issues/702 */
export function slugifyAnchors(elements: DocumentElement[] = []): void {
	elements.forEach((el) => {
		if (el.props?.id) {
			el.props.id = slugify(el.props.id);
		}

		if (el.props?.href) {
			const URI = decodeURI(el.props.href);
			el.props.href = '#' + slugify(URI);
		}

		if (el.id) {
			el.id = slugify(el.id);
		}

		if (el.children) {
			slugifyAnchors(el.children);
		}
	});
}
