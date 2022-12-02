import { Api } from '~/types';

export const api: Api = {
	BackToTopBtn: {
		props: [
			{
				name: 'label',
				type: 'string',
				description: 'Le label accessible du bouton.<br>Cette prop est nécessaire pour rendre le bouton accessible aux lecteurs d’écrans.',
				required: true
			},
			{
				name: 'top',
				type: 'number',
				description: 'La position en pixels du haut de la page à partir de laquelle le bouton apparaît.',
				default: 20
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
