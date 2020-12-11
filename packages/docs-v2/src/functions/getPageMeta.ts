import { MetaInfo } from 'vue-meta';

const DEFAULT_TITLE = 'Design System Digital';
const DEFAULT_DESCRIPTION = 'Un Design System pour l\'Assurance Maladie';

export function getPageMeta(title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION): MetaInfo {
	return {
		title: `${title} | Design System Digital`,
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: description
			},
			// Open Graph
			{
				hid: 'og:title',
				property: 'og:title',
				content: title
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: description
			},
			// Twitter Card
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: title
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: description
			}
		]
	};
}
