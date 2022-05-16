import { Api } from '~/types';

export const api: Api = {
	debounce: {
		arguments: [
			{
				name: 'callback',
				description: 'La fonction à exécuter.',
				type: '() => void',
				required: true
			},
			{
				name: 'time',
				description: 'Le délai d’attente en millisecondes.',
				type: 'number',
				default: 500
			}
		],
		returnValue: [
			{
				type: '() => void'
			}
		]
	}
};
