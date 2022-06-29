import { Api } from '~/types';

export const api: Api = {
	PaginatedTable: {
		props: [
			{
				name: 'options',
				type: 'DataOptions',
				required: true,
				description: 'Les `options` de la `VDataTable`, à utiliser avec le modificateur `.sync`.',
				example: `{
	page: number,
	itemsPerPage: number,
	sortBy: string[],
	sortDesc: boolean[],
	groupBy: string[],
	groupDesc: boolean[],
	multiSort: boolean,
	mustSort: boolean
}`
			},
			{
				name: 'suffix',
				type: 'string',
				default: 'undefined',
				description: 'Suffixe ajouté à l’objet stocké dans le `localStorage` permettant de différencier plusieurs `VDataTable`.'
			}
		]
	}
};
