import { Api } from '~/types';

export const api: Api = {
	SubHeader: {
		props: [
		{
			name: 'hide-back-btn',
			type: 'boolean',
			default: false,
			description: 'Masque le bouton de retour.'
		},
		{
			name: 'back-btn-text',
			type: 'string',
			default: 'Retour',
			description: 'Le texte du bouton retour.'
		},
		{
			name: 'title-text',
			type: 'string',
			default: undefined,
			description: 'Le texte du titre.'
		},
		{
			name: 'sub-title-text',
			type: 'string',
			default: undefined,
			description: 'Le texte du sous-titre.'
		},
		{
			name: 'data-lists',
			type: 'DataListsItem[]',
			default: undefined,
			description: 'Liste des composants `DataList` en mode colonne.',
			example: `
			{
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
			description: 'Affiche un état de chargement.'
		},
		{
			name: 'max-width',
			type: 'number | string',
			default: undefined,
			description: 'La largeur maximale du composant.'
		},
		{
			name: 'min-width',
			type: 'number | string',
			default: undefined,
			description: 'La largeur minimale du composant.'
		},
		{
			name: 'width',
			type: 'number | string',
			default: undefined,
			description: 'La largeur du composant.'
		}
		],
		slots: [
			{
				name: 'back-btn',
				description: 'Slot pour remplacer le bouton retour.'
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
				description: 'Slot pour ajouter des informations complémentaires.'
			}
		],
		events: [
			{
				name: 'click:list-item',
				description: 'Événement émis lorsque l\'utilisateur clique sur un bouton d\'une liste.',
				value: `
				{
					dataListIndex: number,
					itemIndex: number
				}`
			},
			{
				name: 'back',
				description: 'Événement émis lorsque l\'utilisateur clique sur le bouton retour.',
				value: 'undefined'
			}
		]
	}
};
