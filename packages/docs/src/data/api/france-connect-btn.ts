import { Api } from '~/types';

export const api: Api = {
	FranceConnectBtn: {
		props: [
			{
				name: 'href',
				type: 'string',
				required: true,
				description: 'L’URL de connexion à FranceConnect.'
			},
			{
				name: 'icon-text',
				type: 'string',
				default: `'S’identifier avec FranceConnect'`,
				description: 'Le label accessible du bouton.',
			},
			{
				name: 'width',
				type: [
					'string',
					'number'
				],
				default: 300,
				description: 'La largeur du bouton.'
			},
			{
				name: 'height',
				type: [
					'string',
					'number'
				],
				default: 78,
				description: 'La hauteur du bouton.'
			}
		]
	}
};
