import { Api } from '~/types';

export const api: Api = {
	deepRemoveKeys: {
		arguments: [
			{
				name: 'collection',
				description: 'L’objet ou le tableau duquel supprimer les clés.',
				type: 'any',
				required: true
			},
			{
				name: 'keys',
				description: 'La clé ou la liste des clés à supprimer.',
				type: 'string | string[]',
				required: true
			}
		],
		returnValue: [
			{
				type: 'any'
			}
		]
	}
};
