import { Api } from '~/types';

export const api: Api = {
	ExactLength: {
		arguments: [
			{
				name: 'lengthValue',
				type: 'number',
				description: 'La longueur souhaitée'
			},
			{
				name: 'ignoreSpaces',
				type: 'boolean',
				description: 'Si les espaces sont comptés',
				default: false
			},
			{
				name: 'errorMessages',
				type: 'object',
				description: 'Message d’erreurs'
			}
		]
	}
};
