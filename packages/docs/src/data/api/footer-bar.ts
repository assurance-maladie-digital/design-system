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
				name: 'link-items',
				type: 'LinkItem[]',
				default: null,
				description: 'Les liens de navigation à afficher dans le pied de page.',
				example: `{
	text: string;
	to?: RawLocation;
	href?: string;
}[]`
			},
			{
				name: 'sitemap-route',
				type: 'RawLocation',
				default: `{ name: 'sitemap' }`,
				description: 'La valeur de la prop `to` du lien vers le *Plan du site*.'
			},
			{
				name: 'cgu-route',
				type: 'RawLocation',
				default: `{ name: 'cgu' }`,
				description: 'La valeur de la prop `to` du lien vers les *Conditions générales d’utilisation*.'
			},
			{
				name: 'cookies-route',
				type: 'RawLocation',
				default: `{ name: 'cookies' }`,
				description: 'La valeur de la prop `to` du lien vers la *Gestion des cookies*.'
			},
			{
				name: 'legal-notice-route',
				type: 'RawLocation',
				default: `{ name: 'legalNotice' }`,
				description: 'La valeur de la prop `to` du lien vers les *Mentions légales*.'
			},
			{
				name: 'a11y-statement-route',
				type: 'RawLocation',
				default: `{ name: 'a11yStatement' }`,
				description: 'La valeur de la prop `to` du lien vers la *Déclaration d’accessibilité*.'
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
	divider: 'VDivider'
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
	SocialMediaLinks: {
		props: [
			{
				name: 'links',
				type: 'SocialMediaLink[]',
				description: 'Liste des réseaux sociaux.',
				default: null,
				example: `{
	icon: string;
	href: string;
}[]`
			}
		]
	}
};
