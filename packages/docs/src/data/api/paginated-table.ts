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
				description: 'Suffixe ajouté à l’objet stocké dans le `localStorage` permettant de différencier plusieurs `VDataTable`.'
			}
		]
	}
};
