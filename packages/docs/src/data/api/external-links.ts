import { Api } from '~/types';

export const api: Api = {
	ExternalLinks: {
		props: [
			{
				name: 'position',
				type: 'string',
				required: true,
				description: 'La position du menu dans le conteneur.<br>En premier argument la position verticale (`top` ou `bottom`) et en second la position horizontale (`left` ou `right`).',
				example: `position="top left"`
			},
			{
				name: 'items',
				type: 'ExternalLink[]',
				default: '[]',
				description: 'La liste des liens externes à afficher.'
			},
			{
				name: 'btn-text',
				type: 'string',
				default: `'Consulter les données externes'`,
				description: 'Le texte du bouton.'
			},
			{
				name: 'nudge-top',
				type: '[string, number]',
				default: 0,
				description: 'Décale le bouton vers le bas.'
			},
			{
				name: 'nudge-bottom',
				type: '[string, number]',
				default: 0,
				description: 'Décale le bouton vers le haut.'
			},
			{
				name: 'fixed',
				type: 'boolean',
				default: false,
				description: 'Positionne le bouton en mode fixe par rapport à la page.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: 'undefined',
				example: `{
	menu: 'VMenu',
	btn: 'VBtn',
	spacer: 'VSpacer',
	btnIcon: 'VIcon',
	list: 'VList',
	listItem: 'VListItem',
	listItemContent: 'VListItemContent',
	listItemTitle: 'VListItemTitle',
	listItemIcon: 'VListItemIcon',
	linkIcon: 'VIcon',
	card: 'VCard'
}`
			}
		],
		slots: [
			{
				name: 'link-icon',
				description: 'Slot pour remplacer l’icône dans les liens.'
			}
		]
	}
};
