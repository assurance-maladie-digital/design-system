import { Api } from '~/types';

export const api: Api = {
	Logo: {
		props: [
			{
				name: 'hide-signature',
				type: 'boolean',
				default: false,
				description: 'Masque la signature (*Agir ensemble, protéger chacun*).'
			},
			{
				name: 'hide-organism',
				type: 'boolean',
				default: false,
				description: 'Masque l’ombrelle (*Sécurité Sociale*).'
			},
			{
				name: 'risque-pro',
				type: 'boolean',
				default: false,
				description: 'Affiche la version *Risques Professionnels*.'
			},
			{
				name: 'avatar',
				type: 'boolean',
				default: false,
				description: 'Affiche la version *Avatar* en masquant les textes en rendant le logo carré.'
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
	},
	LogoBrandSection: {
		props: [
			{
				name: 'theme',
				type: 'string',
				default: `'default'`,
				description: 'Le thème du logo.',
				example: `'default' | 'cnam' | 'ameli' | 'ameli-pro', | 'risque-pro' | 'compte-entreprise'`
			},
			{
				name: 'service-title',
				type: 'string',
				description: 'Le titre du service (titre de niveau 1).'
			},
			{
				name: 'service-sub-title',
				type: 'string',
				description: 'Le sous-titre du service (titre de niveau 2).'
			},
			{
				name: 'mobile-version',
				type: 'boolean',
				default: false,
				description: 'Affiche la version mobile.'
			},
			{
				name: 'reduce-logo',
				type: 'boolean',
				default: false,
				description: 'Affiche la version *Avatar* du logo de l’Assurance Maladie s’il y a une marque secondaire. Sinon, masque la signature.'
			},
			{
				name: 'home-link',
				type: 'Next',
				default: `'/'`,
				description: 'Le lien vers la page d’accueil.<br>La valeur `false` permet de désactiver le lien.'
			},
			{
				name: 'home-href',
				type: 'string',
				default: 'undefined',
				description: 'Un lien externe à l’application vers la page d’accueil.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu et afficher une marque partenaire.'
			},
			{
				name: 'brand-content',
				description: 'Slot pour personnaliser le contenu de la marque.'
			}
		]
	}
};
