import { Api } from '~/types';

export const api: Api = {
	createStore: {
		typeArguments: [
			{
				name: 'T',
				description: 'Le type décrivant la variable `state` du store.',
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
