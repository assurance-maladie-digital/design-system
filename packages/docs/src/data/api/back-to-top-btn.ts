import { Api } from '~/types';

export const api: Api = {
	BackToTopBtn: {
		props: [
			{
				name: 'threshold',
				type: 'number',
				description: 'Le seuil de défilement en pixels à partir duquel le bouton est affiché.',
				default: 120
			},
			{
				name: 'nudge-right',
				type: '[string, number]',
				default: 16,
				description: 'Décale le bouton vers la gauche.'
			},
			{
				name: 'nudge-bottom',
				type: '[string, number]',
				default: 16,
				description: 'Décale le bouton vers le haut.'
			},
			{
				name: 'target',
				type: 'string',
				description: 'L’id de l’élément à sélectionner pour la gestion du défilement.<br>Par défaut, l’élément `window` est utilisé.',
				default: 'undefined'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: 'undefined',
				example: `{
	btn: 'VBtn',
	icon: 'VIcon'
}`
			}
		]
	}
};
