import { Api } from '~/types';

export const api: Api = {
	LangBtn: {
		props: [
			{
				name: 'available-languages',
				type: 'string[] | AllLanguagesChar',
				default: `[
					'fr', 
					'en'
				]`,
				description: 'Liste des langues disponibles (format *ISO 639-1*). Utilisez `*` pour afficher toutes les possibilités.'
			},
			{
				name: 'hide-down-arrow',
				type: 'boolean',
				default: false,
				description: 'Masque la flèche vers le bas à l\'intérieur du bouton.'
			},
			{
				name: 'label',
				type: 'string',
				default: `'Choix de la langue. Actuellement'`,
				description: 'Le label accessible du bouton.'
			},
			{
				name: 'value',
				type: 'string',
				default: `'fr'`,
				description: 'La langue sélectionnée.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				default: 'undefined',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				example: `{
	menu: 'VMenu',
	btn: 'VBtn',
	icon: 'VIcon',
	list: 'VList',
	listItem: 'VListItem',
	listItemTitle: 'VListItemTitle'
}`
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'lang: string'
			}
		]
	}
};
