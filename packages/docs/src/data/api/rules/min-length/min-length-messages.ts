import { Api } from '~/types';

export const api: Api = {
	MinLengthMessages: {
		errorMessages: [
			{
				name: 'default',
				type: [
					'string',
					'function'
				],
				description: 'Message lorsque la règle n’est pas respectée',
				default: 'La longueur minimale du champ est [min] caractères.'
			}
		]
	}
};
