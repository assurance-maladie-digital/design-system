import { Api } from '~/types';

export const api: Api = {
	propValidator: {
		arguments: [
			{
				name: 'propName',
				type: 'string',
				description: 'The name of the prop to validate'
			}
		],
		returnValue: [
			{
				type: 'boolean'
			}
		]
	}
};
