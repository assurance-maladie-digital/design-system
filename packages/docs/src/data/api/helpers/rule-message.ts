import { Api } from '~/types';

export const api: Api = {
	ruleMessage: {
		arguments: [
			{
				name: 'errorMessages',
				description: 'La liste des messages d’erreur.',
				type: 'ErrorMessages<T>',
				required: true
			},
			{
				name: 'key',
				description: 'La clé correspondant au message d’erreur souhaité.',
				type: 'string',
				required: true
			},
			{
				name: 'args',
				description: 'Les arguments à passer à la fonction correspond au message d’erreur.',
				type: 'any[]',
				default: '[]'
			}
		],
		returnValue: [
			{
				type: 'string'
			}
		]
	}
};
