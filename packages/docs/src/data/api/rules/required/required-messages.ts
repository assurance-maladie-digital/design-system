import { Api } from '~/types';

export const api: Api = {
	Required: {
		errorMessages: [
			{
				name: 'default',
				type: 'string',
				description: 'Message lorque la règle n’est pas respectée.',
				default: 'Ce champs est requis.'
			}
		]
	}
};
