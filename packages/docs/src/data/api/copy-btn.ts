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
				description: 'Le texte à copier ou une fonction qui le retourne. La fonction sera exécutée lors du clic sur le bouton.',
				required: true
			},
			{
				name: 'label',
				type: 'string',
				description: 'Le label accessible du bouton. Cette prop est nécessaire pour rendre le bouton accessible aux lecteurs d’écrans, n’hésitez pas à décrire ce que va copier le bouton.',
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
				description: 'Slot pour remplacer l’icône par défaut.'
			},
			{
				name: 'tooltip',
				description: 'Slot pour remplacer le contenu du tooltip.'
			}
		]
	}
};
