import { Api } from '~/types';

export const api: Api = {
	deepRemoveKeys: {
		arguments: [
			{
				name: 'collection',
				type: 'any',
				description: 'The collection to remove keys from'
			}
		],
		returnValue: [
			{
				type: 'any',
			}
		]
	}
};
