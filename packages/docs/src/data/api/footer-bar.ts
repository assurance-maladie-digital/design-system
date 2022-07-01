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
				name: 'cgu-route',
				type: 'RawLocation',
				default: `{ name: 'cgu' }`,
				description: 'La valeur de la prop `to` du lien vers les *Conditions générales d’utilisation*.'
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
				name: 'complex-mode',
				type: 'boolean',
				default: false,
				description: 'Active le mode complexe du footer.'
			},
			{
				name: 'center-slots-number',
				type: 'number',
				default: 1,
				description: 'Divise le slot principal du footer en plusieurs slots.'
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
				name: 'hide-logo',
				type: 'boolean',
				default: false,
				description: 'Masque le logo.'
			},
			{
				name: 'hide-socials',
				type: 'boolean',
				default: false,
				description: 'Masque le bloc des réseaux sociaux.'
			},
			{
				name: 'logo-hide-signature',
				type: 'boolean',
				default: false,
				description: 'Masque la signature du logo.'
			},
			{
				name: 'logo-hide-organism',
				type: 'boolean',
				default: false,
				description: 'Masque le nom de l\'organisme.'
			},
			{
				name: 'logo-risque-pro',
				type: 'boolean',
				default: false,
				description: 'Affiche le sous titre "risque pro" du logo.'
			},
			{
				name: 'version',
				type: 'string',
				default: 'undefined',
				description: 'Le numéro de version de l’application.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: 'undefined',
				example: `{
	footer: 'VFooter'
}`
			},
			{
				name: 'custom-socials-list',
				type: 'Array',
				description: 'Personnalisation des icones et des liens des réseaux sociaux`.',
				default: `[
					{ icon: mdiLinkedin, href: 'https://www.linkedin.com/company/assurance-maladie/' },
					{ icon: mdiTwitter, href: 'https://twitter.com/Assur_Maladie' }
				]`,
				example: `[
					{ icon: mdiInstagram, link: 'https://insta.com' },
					{ icon: mdiYoutube, link: 'https://insta.com' }
				]`
			}
		],
		slots: [
			{
				name: 'logo',
				description: 'Slot pour ajouter du contenu à la place du logo.'
			},
			{
				name: 'socials',
				description: 'Slot pour ajouter du contenu à la place des réseaux sociaux.'
			},
			{
				name: 'default',
				description: 'Slot pour ajouter du contenu dans la partie centrale du footer.'
			},
			{
				name: 'center-slot-1',
				description: 'Premier slot de la partie centrale du footer. Utiliser center-slot-2 pour le deuxieme slot etc.'
			}
		]
	}
};
