import { Api } from '~/types';

export const api: Api = {
	Logo: {
		props: [
			{
				name: 'mobileVersion',
				type: 'boolean',
				default: false,
				description: 'Affiche la version mobile.'
			},
			{
				name: 'theme',
				type: 'string',
				default: `'default'`,
				description: 'Défini le thème',
				example: `'default' | 'cnam' | 'ameli' | 'ameli-pro', | 'risque-pro' | 'compte-entreprise'`
			},
			{
				name: 'service-title',
				type: 'string',
				description: 'Défini un titre à la marque secondaire. Ne fonctionne qu’avec le theme par défaut',
				example: `'ameli'`
			},
			{
				name: 'service-sub-title',
				type: 'string',
				description: 'Défini un sous-titre à la marque secondaire. Ne fonctionne qu’avec le theme par défaut',
				example: `'Agir ensemble, protéger chacun'`
			},
			{
				name: 'home-href',
				type: 'string',
				description: 'Défini une url vers laquelle aller au clic sur le logo',
				example: `'https://www.ameli.fr/'`
			},
			{
				name: 'home-link',
				type: 'string',
				description: 'Défini une route vers laquelle aller au clic sur le logo',
				example: `'home'`
			},
		]
	}
};
