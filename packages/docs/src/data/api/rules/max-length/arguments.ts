import { Api } from '~/types';

export const api: Api = {
    maxLength: {
		argument: [
			{
				name: 'max',
				type: 'number',
				description: 'La longueur maximum souhaitée'
			},
			{
				name: 'errorMessages',
				type: 'object',
				description: 'Message d’erreurs'
			}
		]
	}
};
