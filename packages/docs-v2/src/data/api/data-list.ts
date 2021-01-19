import { Api } from '~/types';

export const api: Api = {
	DataList: {
		props: [
			{
				name: 'items',
				type: 'DataListItem[]',
				required: true,
				description: 'La liste des items à afficher.',
				example: '{\n	key: string;\n	value?: string | number;\n	action?: string;\n	chip?: boolean;\n	icon?: string;\n	options?: Options;\n}'
			},
			{
				name: 'icons',
				type: 'DataListIcons',
				default: undefined,
				description: 'La liste des différentes icônes disponibles pour les items.',
				example: '{\n	[iconName: string]: string;\n}'
			},
			{
				name: 'list-title',
				type: 'string',
				default: undefined,
				description: 'Le titre de la liste.'
			},
			{
				name: 'title-class',
				type: 'string',
				default: '\'mb-3 headline\'',
				description: 'Les classes à appliquer sur le titre de la liste.'
			},
			{
				name: 'row',
				type: 'boolean',
				default: false,
				description: 'Affiche les items de la liste horizontalement.'
			},
			{
				name: 'flex',
				type: 'boolean',
				default: false,
				description: 'Affiche les items en ligne avec passage à la ligne lorsqu\'il n\'y a plus de place disponible.'
			},
			{
				name: 'placeholder',
				type: 'string',
				default: '\'…\'',
				description: 'Le texte à afficher lorsqu\'il n\'y a pas de valeur.'
			},
			{
				name: 'min-width',
				type: 'string',
				default: undefined,
				description: 'La largeur minimum du composant.'
			},
			{
				name: 'item-width',
				type: 'string',
				default: '\'200px\'',
				description: 'La largeur de chaque item.'
			},
			{
				name: 'loading',
				type: 'boolean',
				default: false,
				description: 'Affiche un état de chargement.'
			},
			{
				name: 'items-number-loading',
				type: 'number',
				default: '1',
				description: 'Le nombre d\'items à afficher lors du chargement.'
			},
			{
				name: 'heading-loading',
				type: 'boolean',
				default: false,
				description: 'Affiche un squelette pour le titre pendant le chargement.'
			},
			{
				name: 'render-html-value',
				default: false,
				type: 'boolean',
				description: 'Utilise `v-html` pour afficher les valeurs.'
			}
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
				description: 'Événement émis lorsque l\'utilisateur clique sur le bouton d\'action d\'un item.',
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
				type: 'string | number',
				default: undefined,
				description: 'La valeur à afficher.'
			},
			{
				name: 'action',
				type: 'string',
				default: undefined,
				description: 'Le label du bouton action à afficher.'
			},
			{
				name: 'placeholder',
				type: 'string',
				default: '\'…\'',
				description: 'Le texte à afficher lorsqu\'il n\'y a pas de valeur.'
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
				default: undefined,
				description: 'Le nom de l\'icône à afficher.'
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
				default: undefined,
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
				description: 'Slot pour remplacer l\'icône.'
			},
			{
				name: 'value',
				description: 'Slot pour remplacer le contenu de l\'item.'
			},
			{
				name: 'action',
				description: 'Slot pour remplacer le contenu de l\'action.'
			}
		],
		events: [
			{
				name: 'click:action',
				description: 'Événement émis lorsque l\'utilisateur clique sur le bouton d\'action.',
				value: 'undefined'
			}
		]
	},
	DataListLoading: {
		props: [
			{
				name: 'itemsNumber',
				type: 'number',
				default: 1,
				description: 'Le nombre d\'items à afficher pendant le chargement.'
			},
			{
				name: 'heading',
				type: 'boolean',
				default: false,
				description: 'Affiche un squelette pour le titre pendant le chargement.'
			},
			{
				name: 'row',
				type: 'boolean',
				default: false,
				description: 'Affiche les items de la liste horizontalement.'
			},
			{
				name: 'flex',
				type: 'boolean',
				default: false,
				description: 'Affiche les items en ligne avec passage à la ligne lorsqu\'il n\'y a plus de place disponible.'
			},
			{
				name: 'width',
				type: 'string',
				default: '200px',
				description: 'La largeur de chaque item.'
			}
		]
	}
};
