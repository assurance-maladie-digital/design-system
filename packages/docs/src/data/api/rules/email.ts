import { Api } from '~/types';

export const api: Api = {
	email: {
		errorMessages: [
			{
				name: 'default',
				type: 'string',
				description: 'Message lorque la règle n’est pas respectée.',
				default: 'Cet e-mail est invalide.'
			}
		]
	}
};
