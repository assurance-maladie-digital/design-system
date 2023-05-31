import { Api } from '~/types';

export const api: Api = {
	localStorageUtility: {
		arguments: [
			{
				name: 'key',
				type: 'string',
				description: 'The key to store the value under'
			}
		],
		returnValue: [
			{
				type: 'any'
			}
		]
	}
};
