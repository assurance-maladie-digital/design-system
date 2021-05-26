import { Api } from '~/types';

export const api: Api = {
	CopyBtn: {
		props: [
			{
				name: 'color',
				type: 'string',
				default: `'currentColor'`,
				description: 'La couleur de l\'icône (n\'importe quelle valeur CSS). Par défaut, l\'icône hérite de la couleur du texte.'
			},
			{
				name: 'small',
				type: 'boolean',
				default: false,
				description: 'Définit la taille de l\'icône à `1em`.'
			},
			{
				name: 'medium',
				type: 'boolean',
				default: false,
				description: 'Définit la taille de l\'icône à `1.5em`.'
			},
			{
				name: 'large',
				type: 'boolean',
				default: false,
				description: 'Définit la taille de l\'icône à `1.85em`.'
			},
			{
				name: 'x-large',
				type: 'boolean',
				default: false,
				description: 'Définit la taille de l\'icône à `2.25em`.'
			},
			{
				name: 'size',
				type: 'string',
				default: 'undefined',
				description: 'Applique une taille CSS personnalisée (largeur / hauteur) à l\'icône. Par défaut, la taille est de `1,35em`.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu de l\'icône.'
			}
		]
	}
};
