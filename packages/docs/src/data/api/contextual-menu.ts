import { Api } from '~/types';

export const api: Api = {
	ContextualMenu: {
		props: [
			{
				name: 'tabs',
				type: '[]',
				required: true,
				description: 'Liste des onglets du menu contextuel',
				example: `{
	label: 'Onglet 1',
	route: '#onglet-1'
}`
			}
		]
	}
};
