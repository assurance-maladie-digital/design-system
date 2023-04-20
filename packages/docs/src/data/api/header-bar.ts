import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

const themeProp = {
	name: 'theme',
	type: 'string',
	required: true,
	description: 'Le thème de l’en-tête.',
	example: `'default' | 'cnam' | 'ameli' | 'ameli-pro' | 'compte-ameli' | 'risque-pro' | 'compte-entreprise'`
};

const mobileVersionProp = {
	name: 'mobile-version',
	type: 'boolean',
	default: false,
	description: 'Affiche le header en version pour les écrans mobiles.<br>Par défaut, ce mode est activé à partir du [breakpoint `sm`](https://vuetifyjs.com/en/features/breakpoints/).'
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
	href?: string;
}[]`
};

const homeLinkProp = {
	name: 'home-link',
	type: 'Next',
	default: `'/'`,
	description: 'Le lien vers la page d’accueil.<br>La valeur `false` permet de désactiver le lien.'
};

const homeHrefProp = {
	name: 'home-href',
	type: 'string',
	default: 'undefined',
	description: 'Un lien externe à l’application vers la page d’accueil.'
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
			homeHrefProp,
			{
				name: 'show-nav-bar-menu-btn',
				type: 'boolean',
				default: false,
				description: 'Affiche le bouton pour activer le menu dans la barre de navigation sur les écrans mobiles.'
			},
			mobileVersionProp,
			{
				name: 'sticky',
				type: 'boolean',
				default: false,
				description: 'Fixe le header en haut de la page et réduit sa hauteur lors du défilement.'
			},
			{
				name: 'target',
				type: 'string',
				default: 'undefined',
				description: 'L’id de l’élément à sélectionner pour la gestion du défilement en mode *sticky*.<br>Par défaut, l’élément `window` est utilisé.'
			},
			...customizable(`{
	appBar: 'VAppBar',
	contentSheet: 'VSheet',
	innerSheet: 'VSheet',
	spacer: 'VSpacer',
	brandSection: 'LogoBrandSection',
	menuBtn: 'HeaderMenuBtn',
	navigationBar: 'HeaderNavigationBar',
	navigationDrawer: 'HeaderNavigationDrawer',
}`, ', ainsi que des composants `LogoBrandSection`, `HeaderMenuBtn`, `HeaderNavigationBar` et `HeaderNavigationDrawer`')
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour afficher du contenu dans la partie droite de l’en-tête.'
			},
			{
				name: 'logo',
				description: 'Slot pour remplacer le logo.'
			},
			{
				name: 'secondary-logo',
				description: 'Slot pour remplacer le bloc marque secondaire et afficher une marque partenaire.'
			},
			{
				name: 'navigation-bar-content',
				description: 'Slot pour remplacer le contenu de la barre de navigation.'
			},
			{
				name: 'navigation-bar-content-prepend',
				description: 'Slot pour ajouter du contenu avant le contenu de la barre de navigation.'
			},
			{
				name: 'navigation-bar-content-append',
				description: 'Slot pour ajouter du contenu après le contenu de la barre de navigation.'
			},
			{
				name: 'navigation-drawer',
				description: 'Slot pour remplacer le menu de navigation sur les écrans mobiles.',
				props: {
					drawer: 'boolean',
					updateDrawer: '(value: boolean) => void'
				}
			},
			{
				name: 'navigation-drawer-content',
				description: 'Slot pour remplacer le contenu du menu de navigation sur les écrans mobiles.'
			},
			{
				name: 'navigation-drawer-content-prepend',
				description: 'Slot pour ajouter du contenu avant le contenu du menu de navigation sur les écrans mobiles.'
			},
			{
				name: 'navigation-drawer-content-append',
				description: 'Slot pour ajouter du contenu après le contenu du menu de navigation sur les écrans mobiles.'
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
			mobileVersionProp,
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
			mobileVersionProp,
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
