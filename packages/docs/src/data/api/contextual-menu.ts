import { Api } from '~/types';

export const api: Api = {
	ExternalLinks: {
		props: [
			{
				name: 'tabs',
				type: '[]',
				required: true,
				description: 'Liste des onglets du menu contextuel',
				example: `{
	name: 'onglet-1',
	label: 'Onglet 1',
	route: '#onglet-1'
}`
			}
		]
	}
};
