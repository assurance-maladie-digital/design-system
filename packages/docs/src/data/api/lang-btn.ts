import { Api } from '~/types';

import { customizable } from './mixins/customizable';

export const api: Api = {
	LangBtn: {
		props: [
			{
				name: 'available-languages',
				type: [
					'string[]',
					'AllLanguagesChar'
				],
				default: `['fr', 'en']`,
				description: 'Liste des langues disponibles au format *ISO 639-1*.<br>Utilisez le caractère `*` pour afficher toutes les possibilités.'
			},
			{
				name: 'hide-down-arrow',
				type: 'boolean',
				default: false,
				description: 'Masque la flèche vers le bas à l’intérieur du bouton.'
			},
			{
				name: 'label',
				type: 'string',
				default: `'Choix de la langue. Actuellement'`,
				description: 'Le label du bouton pour les lecteurs d’écran.'
			},
			{
				name: 'value',
				type: 'string',
				default: `'fr'`,
				description: 'La langue sélectionnée.'
			},
			...customizable(`{
				menu: 'VMenu',
				btn: 'VBtn',
				icon: 'VIcon',
				list: 'VList',
				listItem: 'VListItem',
				listItemTitle: 'VListItemTitle'
}`)
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'string'
			}
		]
	}
};
