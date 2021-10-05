import { Api } from '~/types';

export const api: Api = {
	HeaderBar: {
		props: [
			{
				name: 'displaySearchBar',
				type: 'Boolean',
				default: `false`,
				description: 'Ajoute la fonction `recherche` dans le header'
			},
			{
				name: 'headerConfig',
				type: 'HeaderBarConfig',
				default: `undefined`,
				description: 'La configuration du header',
				example: `{
bgcColor?: string;
box-size?: string;
dark?: boolean;
service?: HeaderTitleSection;
}`
			},
			{
				name: 'navBar',
				type: 'HeaderNavBarConfig',
				default: `undefined`,
				description: 'La configuration de la barre de navigation',
				example: `{
bgcColor?: string;
dark?: boolean;
}`
			},
			{
				name: 'theme',
				type: 'string',
				default: `'ameli.fr'`,
				description: 'Permet de permuter entre les configurations par défaut ou de passer en mode `custom`',
				example: `'cnam' | 'ameli.fr' | 'ameli-pro' | 'risque-pro' | 'custom'`
			},
			{
				name: 'responsiveMenuPosition',
				type: 'string',
				default: `'header'`,
				description: 'Permet de gérer la position du menu en mode responsive ou de le masquer',
				example: `'header' | 'sub-header' | 'hide'`
			}
		],
		slots: [
			{
				name: 'brand',
				description: 'Slot pour réécrire la section contenant le logo (fonctionne uniquement en mode `custom` sur la `props: theme`).'
			},
			{
				name: 'daughter-brand',
				description: 'Slot pour afficher un logo de marque fille à côté de la marque `assurance maladie`.'
			},
			{
				name: 'user-bar',
				description: 'Slot pour afficher un menu contextuel dans la section droite de la `HeaderBar`.'
			},
			{
				name: 'responsive-nav',
				description: 'Slot pour afficher un menu de navigation en mode responsive.'
			},
			{
				name: 'navigation',
				description: 'Slot pour afficher un menu de navigation en mode desktop (affiché dans le sub-header).'
			},
			{
				name: 'sub-bar',
				description: 'Permet de réécrire complètement le sub-header en partant sur un template vierge.'
			}
		],
		events: [
			{
				name: 'search',
				description: 'Événement émis lorsque la valeur du champ *Recherche* est mise à jour.',
				value: 'string'
			}
		]
	}
};
