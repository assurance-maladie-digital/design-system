import { Api } from '~/types';

export const api: Api = {
	PageCard: {
		props: [
			{
				name: 'min-height',
				type: 'boolean',
				default: false,
				description: 'Définit une hauteur minimale de `500px`.'
			},
			{
				name: 'card-class',
				type: 'string',
				default: undefined,
				description: 'Les classes à appliquer à la `VCard.`'
			},
			{
				name: 'card-padding',
				type: 'string',
				default: 'px-6 py-4',
				description: 'Le padding à appliquer à la `VCard`.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				default: undefined,
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				example: `
				{
					layout: 'VLayout'
				}`
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour afficher du contenu.'
			}
		]
	}
};
