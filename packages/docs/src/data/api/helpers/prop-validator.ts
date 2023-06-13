import { Api } from '~/types';

export const api: Api = {
	propValidator: {
		arguments: [
			{
				name: 'propName',
				description: 'Le nom de la prop à valider.',
				type: 'string',
				required: true
			},
			{
				name: 'acceptedValues',
				description: 'La liste des valeurs acceptées.',
				type: 'string | string[]',
				required: true
			},
			{
				name: 'value',
				description: 'La valeur passée à la prop.',
				type: 'string',
				required: true
			}
		],
		returnValue: [
			{
				type: 'boolean'
			}
		]
	}
};
