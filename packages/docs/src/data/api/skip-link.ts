import { Api } from '~/types';

export const api: Api = {
	SkipLink: {
		props: [
			{
				name: 'label',
				type: 'string',
				default: `'Aller au contenu principal'`,
				description: 'Le label du lien.',
			},
			{
				name: 'target',
				type: 'string',
				default: `'#main'`,
				description: 'Le sélecteur de l’élément de contenu principal.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le label par défaut.'
			}
		]
	}
};
