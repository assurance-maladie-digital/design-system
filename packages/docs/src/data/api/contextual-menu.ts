import { Api } from '~/types';

export const api: Api = {
	ContextualMenu: {
		props: [
			{
				name: 'value',
				type: 'String',
				default: null,
				description: 'L’élément actuellement affiché.'
			},
			{
				name: 'items',
				type: 'MenuItem[]',
				default: '[]',
				description: 'La liste des éléments du menu contextuel',
				example: `{
	label: string;
	anchor: string;
}[]`
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'string'
			}
		]
	}
};
