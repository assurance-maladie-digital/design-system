import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	LangBtn: {
		props: [
			{
				name: 'hide-signature',
				type: 'boolean',
				default: false,
				description: 'Masque la signature « Agir ensemble, protéger chacun ».'
			},
			{
				name: 'hide-organism',
				type: 'boolean',
				default: false,
				description: 'Masque l’ombrelle « Sécurité Sociale ».'
			},
			{
				name: 'risque-pro',
				type: 'boolean',
				default: false,
				description: 'Affiche la version « Risques Professionnels ».'
			},
			{
				name: 'dark',
				type: 'boolean',
				default: false,
				description: 'Affiche le logo en couleur blanche.'
			},
			{
				name: 'size',
				type: 'string',
				default: `'normal'`,
				description: 'La taille du logo.',
				example: `'x-small' | 'small' | 'normal'`
			}
		]
	}
};
