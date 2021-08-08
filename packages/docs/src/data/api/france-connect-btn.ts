import { Api } from '~/types';

export const api: Api = {
	FranceConnectBtn: {
		props: [
			{
				name: 'iconText',
				type: 'string',
				default: `'S’identifier avec FranceConnect'`,
				description: 'Donner un titre au bouton.',
			},
			{
				name: 'width',
				type: '[string, number]',
				default: 300,
				description: 'Définir une largeur du bouton.'
			},
			{
				name: 'height',
				type: '[string, number]',
				default: 78,
				description: 'Définir une hauteur.'
			},
			{
				name: 'href',
				type: 'string',
				default: `'https://app.franceconnect.gouv.fr/'`,
				description: 'Définir le lien d\'accès.'
			}
		],
	}
};
