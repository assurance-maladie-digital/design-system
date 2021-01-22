import { Api } from '~/types';

import { widthable } from './mixins/widthable';

export const api: Api = {
	SubHeader: {
		props: [
			{
				name: 'hide-back-btn',
				type: 'boolean',
				default: false,
				description: 'Masque le bouton *Retour*.'
			},
			{
				name: 'back-btn-text',
				type: 'string',
				default: `'Retour'`,
				description: 'Le texte du bouton *Retour*.'
			},
			{
				name: 'title-text',
				type: 'string',
				default: 'undefined',
				description: 'Le texte du titre.'
			},
			{
				name: 'sub-title-text',
				type: 'string',
				default: 'undefined',
				description: 'Le texte du sous-titre.'
			},
			{
				name: 'data-lists',
				type: 'DataListsItem[]',
				default: 'undefined',
				description: 'Liste de `DataList` en mode colonne.',
				example: `{
	key: string;
	value?: string;
	action?: string;
	chip?: boolean;
	icon?: string;
	options?: Options;
}`
			},
			{
				name: 'render-html-value',
				type: 'boolean',
				default: false,
				description: 'Utilise `v-html` pour afficher les valeurs dans les `DataList`.'
			},
			{
				name: 'loading',
				type: 'boolean',
				default: false,
				description: 'Affiche le composant en mode chargement.'
			},
			...widthable,
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: 'undefined',
				example: `{
	backBtn: 'VBtn',
	contentLayout: 'VLayout',
	dataListsLayout: 'VLayout'
}`
			}
		],
		slots: [
			{
				name: 'back-btn',
				description: 'Slot pour remplacer le bouton *Retour*.'
			},
			{
				name: 'title',
				description: 'Slot pour remplacer le titre.'
			},
			{
				name: 'sub-title',
				description: 'Slot pour remplacer le sous-titre.'
			},
			{
				name: 'right-content',
				description: 'Slot pour remplacer le contenu situé à droite.'
			},
			{
				name: 'additional-informations',
				description: 'Slot pour afficher des informations complémentaires.'
			}
		],
		events: [
			{
				name: 'click:list-item',
				description: 'Événement émis lorsque l\'utilisateur clique sur un bouton d\'une liste.',
				value: `{
	dataListIndex: number,
	itemIndex: number
}`
			},
			{
				name: 'back',
				description: 'Événement émis lorsque l\'utilisateur clique sur le bouton *Retour*.',
				value: undefined
			}
		]
	}
};
