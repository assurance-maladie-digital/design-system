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
				description: 'La longueur souhaitée',
				default: 'La longueur du champ doit être de [lengthValue] caractères.'
			}
		]
	}
};
