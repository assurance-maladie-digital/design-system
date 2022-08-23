import { Api } from '~/types';

export const api: Api = {
	createStore: {
		typeArguments: [
			{
				name: 'T',
				description: 'Le type du state.',
				default: 'unknown'
			}
		],
		arguments: [
			{
				name: 'options',
				description: 'Les options du store.',
				type: 'StoreOptions<T>',
				required: true
			}
		],
		returnValue: [
			{
				type: 'Store<T>'
			}
		]
	}
};
