import { Api } from '~/types';

export const api: Api = {
	HeaderLoading: {
		props: [
			{
				name: 'width',
				type: 'string',
				default: `'100px'`,
				description: 'La largeur du composant.'
			},
			{
				name: 'height',
				type: 'string',
				default: `'1rem'`,
				description: 'La hauteur du composant.'
			}
		]
	}
};
