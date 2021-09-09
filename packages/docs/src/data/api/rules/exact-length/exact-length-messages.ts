import { Api } from '~/types';

export const api: Api = {
	ExactLengthMessages: {
		errorMessages: [
			{
				name: 'default',
				type: [
					'string',
					'function'
				],
				description: 'Message lorsque la règle n’est pas respectée',
				default: 'La longueur du champ doit être de [lengthValue] caractères.'
			}
		]
	}
};
