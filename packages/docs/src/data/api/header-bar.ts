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

const drawerContentSlot = {
	name: 'navigation-bar-drawer-content',
	description: 'Slot pour remplacer le contenu du menu de navigation sur les écrans mobiles.'
};

const titleProps = [
	{
		name: 'service-title',
		type: 'string',
		default: 'undefined',
		description: 'Le titre du service (titre de niveau 1).'
	},
	{
		name: 'service-sub-title',
		type: 'string',
		default: 'undefined',
		description: 'Le sous-titre du service (titre de niveau 2).'
	}
];

export const api: Api = {
	HeaderBar: {
		props: [
			{
				...themeProp,
				default: `'default'`,
				required: false
			},
			...titleProps,
			{
				name: 'navigation-items',
				type: 'NavigationItem[]',
				default: 'undefined',
				description: 'La liste des liens à afficher dans la barre de navigation.',
				example: `{
	label: string;
	to?: string | Route;
	href?: string | Route;
}[]`
			},
			innerWidthProp,
			...customizable(`{
	sheet: 'VSheet',
	contentSheet: 'VSheet',
	innerSheet: 'VSheet',
	spacer: 'VSpacer'
}`)
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
				name: 'brand',
				description: 'Slot pour remplacer le bloc marque.'
			},
			{
				name: 'navigation-bar-content',
				description: 'Slot pour remplacer le contenu de la barre de navigation.'
			},
			drawerContentSlot
		]
	},
	HeaderBrandSection: {
		props: [
			themeProp,
			...titleProps,
			{
				name: 'is-mobile',
				type: 'boolean',
				default: false,
				description: 'Affiche la version mobile.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu et afficher une marque partenaire.'
			}
		]
	},
	HeaderNavigationBar: {
		props: [
			themeProp,
			{
				name: 'items',
				type: 'NavigationItem[]',
				default: 'undefined',
				description: 'La liste des liens de navigation à afficher.',
				example: `{
	label: string;
	to?: string | Route;
	href?: string | Route;
}[]`
			},
			isMobileProp,
			innerWidthProp,
			...customizable(`{
	sheet: 'VSheet',
	innerSheet: 'VSheet',
	menuBtn: 'VBtn',
	menuIcon: 'VIcon',
	tabs: 'VTabs',
	tab: 'VTab',
	navigationDrawer: 'VNavigationDrawer',
	spacer: 'VSpacer',
	closeBtn: 'VBtn',
	closeIcon: 'VIcon',
	mobileTabs: 'VTabs',
	mobileTab: 'VTab'
}`)
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu.'
			},
			drawerContentSlot
		]
	}
};
