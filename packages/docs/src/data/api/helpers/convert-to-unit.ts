import { Api } from '~/types';

export const api: Api = {
	convertToUnit: {
		arguments: [
			{
				name: 'str',
				description: 'La valeur à convertir.',
				type: 'string | number | null | undefined',
				required: true
			},
			{
				name: 'unit',
				description: 'L’unité à ajouter.',
				type: 'string',
				default: `'px'`
			}
		],
		returnValue: [
			{
				type: 'string | undefined'
			}
		]
	}
};
