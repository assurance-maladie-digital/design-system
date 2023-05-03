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
				name: 'no-padding',
				type: 'boolean',
				description: 'Supprime le padding horizontal du bouton.',
				default: false
			},
			{
				name: 'elevation',
				type: 'number',
				description: 'Élévation du bouton.',
				default: 0
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
