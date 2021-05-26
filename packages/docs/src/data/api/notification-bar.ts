import { Api } from '~/types';

export const api: Api = {
	NotificationBar: {
		props: [
			{
				name: 'close-btn-text',
				type: 'string',
				default: `'Fermer'`,
				description: 'Le texte du bouton *Fermer*.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				default: 'undefined',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				example: `{
	snackBar: 'VSnackbar',
	icon: 'VIcon',
	btn: 'VBtn'
}`
			}
		]
	}
};
