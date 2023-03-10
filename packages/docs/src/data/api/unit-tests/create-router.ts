import { Api } from '~/types';

export const api: Api = {
	createRouter: {
		arguments: [
			{
				name: 'options',
				description: 'Les options du router.',
				type: 'RouterOptions',
				default: undefined
			}
		],
		returnValue: [
			{
				type: 'VueRouter'
			}
		]
	}
};
