import { Api } from '~/types';

export const api: Api = {
	FooterBar: {
		props: [
			{
				name: 'a11y-compliance',
				type: 'string',
				default: `'non-compliant'`,
				description: 'Le niveau de conformité aux règles d’accessibilité de l’application.<br>Cette mention est obligatoire, voir la [documentation du RGAA](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/obligations/#d%C3%A9claration-daccessibilit%C3%A9).',
				example: `'non-compliant' | 'partially-compliant' | 'fully-compliant'`
			},
			{
				name: 'sitemap-route',
				type: 'RawLocation',
				default: `{ name: 'sitemap' }`,
				description: 'La valeur de la prop `to` du lien vers le *Plan du site*.'
			},
			{
				name: 'sitemap-external-link',
				type: 'string',
				default: null,
				description: 'L’URL du lien vers le *Plan du site* si celui-ci est externe à l’application.'
			},
			{
				name: 'cgu-route',
				type: 'RawLocation',
				default: `{ name: 'cgu' }`,
				description: 'La valeur de la prop `to` du lien vers les *Conditions générales d’utilisation*.'
			},
			{
				name: 'cgu-external-link',
				type: 'string',
				default: null,
				description: 'L’URL du lien vers les *Conditions générales d’utilisation* si celui-ci est externe à l’application.'
			},
			{
				name: 'cookies-route',
				type: 'RawLocation',
				default: `{ name: 'cookies' }`,
				description: 'La valeur de la prop `to` du lien vers la *Gestion des cookies*.'
			},
			{
				name: 'cookies-external-link',
				type: 'string',
				default: null,
				description: 'L’URL du lien vers la *Gestion des cookies* si celui-ci est externe à l’application.'
			},
			{
				name: 'legal-notice-route',
				type: 'RawLocation',
				default: `{ name: 'legalNotice' }`,
				description: 'La valeur de la prop `to` du lien vers les *Mentions légales*.'
			},
			{
				name: 'legal-notice-external-link',
				type: 'string',
				default: null,
				description: 'L’URL du lien vers les *Mentions légales* si celui-ci est externe à l’application.'
			},
			{
				name: 'a11y-statement-route',
				type: 'RawLocation',
				default: `{ name: 'a11yStatement' }`,
				description: 'La valeur de la prop `to` du lien vers la *Déclaration d’accessibilité*.'
			},
			{
				name: 'a11y-statement-external-link',
				type: 'string',
				default: null,
				description: 'L’URL du lien vers la *Déclaration d’accessibilité* si celui-ci est externe à l’application.'
			},
			{
				name: 'hide-sitemap-link',
				type: 'boolean',
				default: false,
				description: 'Masque le lien vers le *Plan du site*.'
			},
			{
				name: 'hide-cgu-link',
				type: 'boolean',
				default: false,
				description: 'Masque le lien vers les *Conditions générales d’utilisation*.'
			},
			{
				name: 'hide-cookies-link',
				type: 'boolean',
				default: false,
				description: 'Masque le lien vers la *Gestion des cookies*.'
			},
			{
				name: 'hide-legal-notice-link',
				type: 'boolean',
				default: false,
				description: 'Masque le lien vers les *Mentions légales*.'
			},
			{
				name: 'hide-a11y-link',
				type: 'boolean',
				default: false,
				description: 'Masque le lien vers la *Déclaration d’accessibilité*.'
			},
			{
				name: 'version',
				type: 'string',
				default: 'undefined',
				description: 'Le numéro de version de l’application.'
			},
			{
				name: 'hide-logo',
				type: 'boolean',
				default: false,
				description: 'Masque le logo.'
			},
			{
				name: 'hide-social-media-links',
				type: 'boolean',
				default: false,
				description: 'Masque la liste des réseaux sociaux.'
			},
			{
				name: 'social-media-links',
				type: 'SocialMediaLink[]',
				description: 'Personnalisation de la liste des réseaux sociaux.',
				default: 'Voir dans le code source',
				example: `{
	icon: string;
	href: string;
}[]`
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: 'undefined',
				example: `{
	footer: 'VFooter',
	spacer: 'VSpacer',
	goTopBtn: 'VBtn',
	goTopBtnIcon: 'VIcon',
	divider: 'VDivider',
	routerLink: 'RouterLink'
}`
			},
			{
				name: 'dark',
				type: 'boolean',
				default: false,
				description: 'Active le mode sombre.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour ajouter du contenu dans la partie centrale du pied de page.'
			},
			{
				name: 'logo',
				description: 'Slot pour remplacer le logo.'
			},
			{
				name: 'social-media-links',
				description: 'Slot pour remplacer la liste des réseaux sociaux.'
			},
			{
				name: 'prepend',
				description: 'Slot pour ajouter du contenu avant les liens du pied de page.'
			},
			{
				name: 'append',
				description: 'Slot pour ajouter du contenu après les liens du pied de page.'
			}
		]
	},
	CollapsibleList: {
		props: [
			{
				name: 'list-title',
				type: 'string',
				default: null,
				description: 'Le titre de la liste.'
			},
			{
				name: 'items',
				type: 'ListItem[]',
				default: null,
				description: 'Les éléments de la liste.',
				example: `{
	text: string;
	href: string;
}[]`
			}
		]
	},
	SocialMediaLinks: {
		props: [
			{
				name: 'links',
				type: 'SocialMediaLink[]',
				default: null,
				description: 'Liste des réseaux sociaux.',
				example: `{
	icon: string;
	href: string;
}[]`
			}
		]
	}
};
