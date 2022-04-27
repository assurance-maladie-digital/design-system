import { Api } from '~/types';

export const api: Api = {
	insertAt: {
		arguments: [
			{
				name: 'source',
				description: 'Le texte à modifier',
				type: 'string',
				required: true
			},
			{
				name: 'index',
				description: 'La position où insérer le texte',
				type: 'number',
				required: true
			},
			{
				name: 'replacement',
				description: 'Le texte à insérer',
				type: 'string',
				required: true
			}
		],
		returnValue: [
			{
				type: 'string'
			}
		]
	}
};
