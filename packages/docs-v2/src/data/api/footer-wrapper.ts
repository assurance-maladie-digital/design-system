import { Api } from '~/types';

export const api: Api = {
	FooterWrapper: {
		slots: [
			{
				name: 'default',
				description: 'Slot pour ajouter du contenu.'
			}
		]
		},
	FooterBtn: {
		props: [
			{
				name: 'inert',
				type: 'boolean',
				default: false,
				description: 'Rend le bouton inactif.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour le texte.'
			}
		]
	}
};
