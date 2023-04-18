import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

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
				name: 'divider',
				type: 'boolean',
				default: `false`,
				description: 'Affiche une ligne de séparation entre le contenu et le(s) bouton(s).'
			},
			{
				name: 'inline-mobile',
				type: 'boolean',
				default: `false`,
				description: 'Force l\'affichage de la barre de notification en ligne sur les écrans mobiles.'
			},
			...customizable(`{
	snackBar: 'VSnackbar',
	icon: 'VIcon',
	btn: 'VBtn',
	closeIcon: 'VIcon'
}`)
		]
	}
};
