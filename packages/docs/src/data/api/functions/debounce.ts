import { Api } from '~/types';

export const api: Api = {
	debounce: {
		arguments: [
			{
				name: 'callback',
				description: 'La fonction à executer',
				type: '() => void',
				required: true
			},
			{
				name: 'time',
				description: 'Le temps à attendre en ms',
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
