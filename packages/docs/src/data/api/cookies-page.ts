import { Api } from '~/types';

const cookiesItemsProp = {
	name: 'items',
	type: 'CookiesList[]',
	required: true,
	description: 'La liste des cookies décrits.',
	example: `{
	name: string;
	description: string;
	conservation: string;
}[]`
};

export const api: Api = {
	CookiesPage: {
		props: [
			{
				name: 'items',
				type: 'CookiesPageItems',
				required: true,
				description: 'La liste des cookies.',
				example: `{
	essentials: CookiesList[];
	functional: CookiesList[];
	analytics: CookiesList[];
}`
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque l’utilisateur enregistre ses préférences.',
				value: `{
	functional?: boolean,
	analytics?: boolean
}`
			}
		]
	},
	CookiesInformation: {
		props: [
			{
				name: 'type',
				type: 'string',
				required: true,
				description: 'Le type de cookies décrits dans le tableau.',
				example: `'essentials' | 'functional' | 'analytics'`
			},
			{
				...cookiesItemsProp,
				name: 'table-items'
			},
			{
				name: 'value',
				type: [
					'boolean',
					'null'
				],
				default: null,
				description: 'Le choix de l’utilisateur.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: `boolean`
			}
		]
	},
	CookiesTable: {
		props: [
			cookiesItemsProp
		]
	}
};
