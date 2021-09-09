import { Api } from '~/types';

export const api: Api = {
	required: {
		errorMessages: [
			{
				name: 'default',
				type: 'string',
				description: 'Message affiché lorsque la règle n’est pas respectée.',
				default: `'Le champ est requis.'`
			}
		]
	}
};
