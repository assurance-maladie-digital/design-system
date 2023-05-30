import { Api } from '~/types';

export const api: Api = {
	BackBtn: {
		props: [
			{
				name: 'hide-back-icon',
				type: 'boolean',
				description: 'Masque l’icône du bouton.',
				default: false
			},
			{
				name: 'dark',
				type: 'boolean',
				description: 'Active le mode sombre.',
				default: false
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le texte du bouton.'
			},
			{
				name: 'icon',
				description: 'Slot pour remplacer l’icône.'
			}
		]
	}
};
