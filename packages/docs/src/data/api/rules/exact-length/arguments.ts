import { Api } from '~/types';

export const api: Api = {
	exactLength: {
		arguments: [
			{
				name: 'lengthValue',
				type: 'number',
				description: 'Longueur requise'
			},
			{
				name: 'ignoreSpaces',
				type: 'boolean',
				description: 'Si les espaces doivent être comptés',
				default: false
			},
			{
				name: 'errorMessages',
				type: 'object',
				description: 'Message affiché lorsque la règle n’est pas respectée.'
			}
		]
	}
};
