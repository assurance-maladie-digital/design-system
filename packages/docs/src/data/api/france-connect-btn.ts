import { Api } from '~/types';

export const api: Api = {
	FranceConnectBtn: {
		props: [
			{
				name: 'iconText',
				type: 'string',
				default: 'S’identifier avec FranceConnect',
				description: 'Donner un titre au bouton.',
			},
			{
				name: 'width',
				type: '[string, number]',
				default: 0,
				description: 'Définir une largeur du bouton.'
			},
			{
				name: 'height',
				type: '[string, number]',
				default: 0,
				description: 'Définir une hauteur.'
			}
		],
	}
};
