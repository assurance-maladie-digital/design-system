import { Api } from '~/types';

export const api: Api = {
	ruleMessage: {
		arguments: [
			{
				name: 'errorMessages',
				type: 'ErrorMessages<T>',
				description: 'The error messages object'
			}
		],
		returnValue: [
			{
				type: 'string'
			}
		]
	}
};
