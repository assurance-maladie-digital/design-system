import { Api } from '~/types';

export const api: Api = {
	PageFooter: {
		props: [
			{
				name: 'items',
				type: [ 
					'RouterLinkItem[]', 
					'RouterLinkItemGroup' 
				],
				default: `undefined`,
				description: 'Les données à passer au composant.', 
				example: `[
	{
		label: string;
		to?: string;
	}
]`
			},
			{
				name: 'accessLevel',
				type: [
					'Number', 
					'String'
				],
				default: `0`,
				description: 'Définir le niveau d\'accessibilité.', 
			},
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour integrer du contenu image ou autre template.'
			},
			{
				name: 'content',
				description: 'Slot pour integrer des liens(`RouterLink`) accessibles simples ou complexes.'
			}
		]
	}
};
