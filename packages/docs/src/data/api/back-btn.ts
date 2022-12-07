import { Api } from '~/types';

export const api: Api = {
	BackBtn: {
		props: [
			{
				name: 'label',
				type: 'string',
				description: 'Le label accessible du bouton.<br>Cette prop est nécessaire pour rendre le bouton accessible aux lecteurs d’écrans, vous pouvez décrire ce que va copier le bouton.',
				required: true
			},
			{
				name: 'hide-back-icon',
				type: 'boolean',
				description: 'Masque l’icône de retour.',
				default: false
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
