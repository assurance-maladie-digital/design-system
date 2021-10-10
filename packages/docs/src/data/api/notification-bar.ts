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
			...customizable(`{
	snackBar: 'VSnackbar',
	icon: 'VIcon',
	btn: 'VBtn'
}`)
		]
	}
};
