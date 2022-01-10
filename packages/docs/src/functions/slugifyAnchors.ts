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

			const httpScheme = URI.startsWith('http://');
			const httpsScheme = URI.startsWith('https://');
			const isExternalURI = httpScheme || httpsScheme;

			const href = isExternalURI ? URI : '#' + slugify(URI);

			el.props.href = href;
		}

		if (el.id) {
			el.id = slugify(el.id);
		}

		if (el.children) {
			slugifyAnchors(el.children);
		}
	});
}
