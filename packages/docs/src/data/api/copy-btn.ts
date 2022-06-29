import { Api } from '~/types';

export const api: Api = {
	CopyBtn: {
		props: [
			{
				name: 'text-to-copy',
				type: [
					'string',
					'function'
				],
				description: 'Le texte à copier ou une fonction qui retourne celui-ci.<br>La fonction sera exécutée lors du clic sur le bouton.',
				required: true
			},
			{
				name: 'label',
				type: 'string',
				description: 'Le label accessible du bouton.<br>Cette prop est nécessaire pour rendre le bouton accessible aux lecteurs d’écrans, vous pouvez décrire ce que va copier le bouton.',
				required: true
			},
			{
				name: 'hide-tooltip',
				type: 'boolean',
				description: 'Masque le `VTooltip`.',
				default: false
			},
			{
				name: 'tooltip-duration',
				type: 'number',
				description: 'La durée d’affichage du tooltip en millisecondes.',
				default: 2500
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: 'undefined',
				example: `{
	menu: 'VMenu',
	btn: 'VBtn',
	icon: 'VIcon'
}`
			}
		],
		slots: [
			{
				name: 'icon',
				description: 'Slot pour remplacer l’icône.'
			},
			{
				name: 'tooltip',
				description: 'Slot pour remplacer le contenu du tooltip.'
			}
		]
	}
};
