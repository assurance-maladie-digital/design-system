import { Api } from '~/types';

export const api: Api = {
	formatNir: {
		arguments: [
			{
				name: 'nir',
				description: 'Le NIR à formatter.',
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
