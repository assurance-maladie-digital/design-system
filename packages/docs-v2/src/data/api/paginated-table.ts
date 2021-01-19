import { Api } from '~/types';

export const api: Api = {
	PaginatedTable: {
		props: [
			{
				name: 'options',
				type: 'DataOptions',
				required: true,
				description: 'Les `options` de la `VDataTable`, à utiliser avec le modificateur `.sync`.'
			},
			{
				name: 'suffix',
				type: 'string',
				default: `''`,
				description: 'Suffixe à ajouter à l\'objet stocké dans le `localStorage` (permet de dissocier chaque `VDataTable`).'
			}
		]
	}
};
