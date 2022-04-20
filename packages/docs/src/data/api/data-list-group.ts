import { Api } from '~/types';

export const api: Api = {
	DataListGroup: {
		props: [
			{
				name: 'items',
				type: 'DataListGroupItems',
				required: true,
				description: 'La liste des items à afficher.',
				example: `{
	title?: string;
	items: DataList;
	headingLoading?: boolean;
	itemsNumberLoading?: number;
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
				name: 'item-width',
				type: 'string',
				default: `'200px'`,
				description: 'La largeur de chaque item.'
			},
			{
				name: 'loading',
				type: 'boolean',
				default: false,
				description: 'Affiche la liste en mode chargement.'
			},
			{
				name: 'render-html-value',
				default: false,
				type: 'boolean',
				description: 'Utilise la directive `v-html` pour afficher les valeurs.'
			}
		],
		events: [
			{
				name: 'click:list-item',
				description: 'Événement émis lorsque l’utilisateur clique sur un bouton d’une liste.',
				value: `{
	dataListIndex: number,
	itemIndex: number
}`
			}
		]
	}
};
