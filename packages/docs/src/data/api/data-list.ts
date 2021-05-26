import { Api } from '~/types';

import { widthable } from './mixins/widthable';

export const api: Api = {
	DataList: {
		props: [
			{
				name: 'items',
				type: 'DataListItem[]',
				required: true,
				description: 'La liste des items à afficher.',
				example: `{
	key: string;
	value?: string | number;
	action?: string;
	chip?: boolean;
	icon?: string;
	options?: Options;
	class?: string;
}[]`
			},
			{
				name: 'icons',
				type: 'DataListIcons',
				default: 'undefined',
				description: 'La liste des différentes icônes qui peuvent être affichées dans les items.',
				example: `{
	[iconName: string]: string;
}`
			},
			{
				name: 'list-title',
				type: 'string',
				default: 'undefined',
				description: 'Le titre de la liste.'
			},
			{
				name: 'title-class',
				type: 'string',
				default: `'text-subtitle-1 font-weight-bold mb-3'`,
				description: 'Les classes à appliquer sur le titre de la liste.'
			},
			{
				name: 'row',
				type: 'boolean',
				default: false,
				description: 'Affiche les valeurs à côté des labels.'
			},
			{
				name: 'placeholder',
				type: 'string',
				default: `'…'`,
				description: 'Le texte à afficher lorsqu’il n’y a pas de valeur.'
			},
			{
				name: 'loading',
				type: 'boolean',
				default: false,
				description: 'Affiche la liste en mode chargement.'
			},
			{
				name: 'items-number-loading',
				type: 'number',
				default: 1,
				description: 'Le nombre d’items à afficher en mode chargement.'
			},
			{
				name: 'heading-loading',
				type: 'boolean',
				default: false,
				description: 'Affiche un squelette pour le titre en mode chargement.'
			},
			{
				name: 'render-html-value',
				default: false,
				type: 'boolean',
				description: 'Utilise `v-html` pour afficher les valeurs.'
			},
			...widthable
		],
		slots: [
			{
				name: 'title',
				description: 'Slot pour remplacer le titre par défaut.'
			}
		],
		events: [
			{
				name: 'click:item-action',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton d’action d’un item.',
				value: 'itemIndex: number'
			}
		]
	},
	DataListItem: {
		props: [
			{
				name: 'label',
				type: 'string',
				required: true,
				description: 'Le label de la valeur.'
			},
			{
				name: 'value',
				type: [
					'string',
					'number'
				],
				default: 'undefined',
				description: 'La valeur à afficher.'
			},
			{
				name: 'action',
				type: 'string',
				default: 'undefined',
				description: 'Le label du bouton action à afficher.'
			},
			{
				name: 'placeholder',
				type: 'string',
				default: `'…'`,
				description: 'Le texte à afficher lorsqu’il n’y a pas de valeur.'
			},
			{
				name: 'chip',
				type: 'boolean',
				default: false,
				description: 'Affiche la valeur dans une `VChip`.'
			},
			{
				name: 'icon',
				type: 'string',
				default: 'undefined',
				description: 'Le nom de l’icône à afficher.'
			},
			{
				name: 'render-html-value',
				type: 'boolean',
				default: false,
				description: 'Utilise `v-html` pour afficher les valeurs.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				default: 'undefined',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				example: `{
	layout: 'VLayout',
	chip: 'VChip',
	icon: 'VIcon',
	actionBtn: 'VBtn'
}`
			}
		],
		slots: [
			{
				name: 'icon',
				description: 'Slot pour remplacer l’icône.'
			},
			{
				name: 'value',
				description: 'Slot pour remplacer le contenu de l’item.',
				props: {
					itemValue: 'string | number'
				}
			},
			{
				name: 'action',
				description: 'Slot pour remplacer le contenu de l’action.'
			}
		],
		events: [
			{
				name: 'click:action',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton d’action.',
				value: undefined
			}
		]
	},
	DataListLoading: {
		props: [
			{
				name: 'itemsNumber',
				type: 'number',
				default: 1,
				description: 'Le nombre d’items à afficher en mode chargement.'
			},
			{
				name: 'heading',
				type: 'boolean',
				default: false,
				description: 'Affiche un squelette pour le titre en mode chargement.'
			},
			{
				name: 'row',
				type: 'boolean',
				default: false,
				description: 'Affiche les valeurs à côté des labels.'
			},
			{
				name: 'width',
				type: 'string',
				default: `'200px'`,
				description: 'La largeur de chaque item.'
			}
		]
	}
};
