import { Api } from '~/types';

export const api: Api = {
	convertToUnit: {
		arguments: [
			{
				name: 'str',
				description: 'La valeur à convertir.',
				type: 'string | number',
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