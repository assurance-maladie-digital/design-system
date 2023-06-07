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
				name: 'connect-plus',
				type: 'boolean',
				default: false,
				description: 'Affiche la variante FranceConnect+.'
			}
		]
	}
};
