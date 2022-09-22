import { Api } from '~/types';

export const api: Api = {
	SearchListField: {
		props: [
			{
				name: 'value',
				type: 'unknown[]',
				default: '[]',
				description: 'Les valeurs sélectionnées par l’utilisateur.'
			},
			{
				name: 'items',
				type: 'SearchListItem[]',
				default: '[]',
				description: 'La liste des éléments à afficher dans la liste.',
				example: `{
	label: string;
	value: unknown;
}[]`
			},
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'unknown[]'
			}
		]
	}
};
