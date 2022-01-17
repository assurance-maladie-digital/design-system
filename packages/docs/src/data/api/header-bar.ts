import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

const themeProp = {
	name: 'theme',
	type: 'string',
	required: true,
	description: 'Le thème de l’en-tête.',
	example: `'default' | 'cnam' | 'ameli' | 'ameli-pro' | 'risque-pro'`
};

const isMobileProp = {
	name: 'is-mobile',
	type: 'boolean',
	default: false,
	description: 'Affiche la version mobile.'
};

const innerWidthProp = {
	name: 'inner-width',
	type: 'string',
	default: `'100%'`,
	description: 'La largeur interne du composant.'
};

const titleProp = {
	name: 'service-title',
	type: 'string',
	default: 'undefined',
	description: 'Le titre du service (titre de niveau 1).'
};

const subTitleProp = {
	name: 'service-sub-title',
	type: 'string',
	default: 'undefined',
	description: 'Le sous-titre du service (titre de niveau 2).'
};

const itemsProp = {
	name: 'items',
	type: 'NavigationItem[]',
	default: 'undefined',
	description: 'La liste des liens de navigation à afficher.',
	example: `{
	label: string;
	to?: string | RawLocation;
	href?: string | string;
}[]`
};

const homeLinkProp = {
	name: 'home-link',
	type: 'Next',
	default: `'/'`,
	description: 'Le lien vers la page d’accueil.<br>La valeur `false` permet de désactiver le lien.'
};

const drawerProp = {
	name: 'drawer',
	type: 'boolean',
	default: false,
	description: 'Contrôle la visibilité du menu sur les écrans mobiles.'
};

export const api: Api = {
	HeaderBar: {
		props: [
			{
				...themeProp,
				default: `'default'`,
				required: false
			},
			titleProp,
			subTitleProp,
			{
				...itemsProp,
				name: 'navigation-items',
				description: 'La liste des liens à afficher dans la barre de navigation.'
			},
			innerWidthProp,
			homeLinkProp,
			{
				name: 'show-nav-bar-menu-btn',
				type: 'boolean',
				default: false,
				description: 'Affiche le bouton pour activer le menu dans la barre de navigation sur les écrans mobiles.'
			},
			...customizable(`{
	appBar: 'VAppBar',
	contentSheet: 'VSheet',
	innerSheet: 'VSheet',
	spacer: 'VSpacer',
	menuBtn: 'HeaderMenuBtn'
}`, 'et `HeaderMenuBtn`')
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour afficher du contenu dans la partie droite de l’en-tête.'
			},
			{
				name: 'secondary-brand',
				description: 'Slot pour remplacer le bloc marque secondaire et afficher une marque partenaire.'
			},
			{
				name: 'navigation-bar-content',
				description: 'Slot pour remplacer le contenu de la barre de navigation.'
			},
			{
				name: 'navigation-drawer-content',
				description: 'Slot pour remplacer le contenu du menu de navigation sur les écrans mobiles.'
			}
		]
	},
	HeaderBrandSection: {
		props: [
			themeProp,
			titleProp,
			subTitleProp,
			{
				name: 'is-mobile',
				type: 'boolean',
				default: false,
				description: 'Affiche la version mobile.'
			},
			homeLinkProp
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu et afficher une marque partenaire.'
			}
		]
	},
	HeaderMenuBtn: {
		props: [
			drawerProp,
			{
				name: 'spacing',
				type: 'string',
				default: `'px-2 mx-n2'`,
				description: 'L’espacement du bouton.'
			}
		]
	},
	HeaderNavigationBar: {
		props: [
			themeProp,
			itemsProp,
			isMobileProp,
			innerWidthProp,
			drawerProp,
			{
				name: 'tab',
				type: [
					'number',
					'string'
				],
				default: null,
				description: 'L’onglet sélectionné.'
			},
			...customizable(`{
	sheet: 'VSheet',
	innerSheet: 'VSheet',
	tabs: 'VTabs',
	tab: 'VTab'
}`)
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu.'
			}
		]
	},
	HeaderNavigationDrawer: {
		props: [
			themeProp,
			itemsProp,
			isMobileProp,
			drawerProp,
			...customizable(`{
	navigationDrawer: 'VNavigationDrawer',
	closeBtn: 'VBtn',
	closeIcon: 'VIcon',
	tabs: 'VTabs',
	tab: 'VTab'
}`)
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu.'
			}
		]
	}
};
