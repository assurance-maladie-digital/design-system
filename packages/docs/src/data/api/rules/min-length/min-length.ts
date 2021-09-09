import { Api } from '~/types';

export const api: Api = {
	ExactLength: {
		arguments: [
			{
				name: 'min',
				type: 'number',
				description: 'La longueur minimum souhaitée'
			},
			{
				name: 'errorMessages',
				type: 'object',
				description: 'Message d’erreurs'
			}
		]
	}
};
