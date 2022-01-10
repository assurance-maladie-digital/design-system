import { Api } from '~/types';

export const api: Api = {
	CopyBtn: {
		props: [
			{
				name: 'icon',
				type: 'string',
				default: undefined,
				description: 'Le nom de l’icône à afficher.<br>Cette prop n’est pas requise lorsque le slot par défaut est utilisé.'
			},
			{
				name: 'color',
				type: 'string',
				default: `'currentColor'`,
				description: 'La couleur de l’icône (une valeur CSS).<br>Par défaut, l’icône hérite de la couleur du texte.'
			},
			{
				name: 'small',
				type: 'boolean',
				default: false,
				description: 'Définit la taille de l’icône à `1em`.'
			},
			{
				name: 'medium',
				type: 'boolean',
				default: false,
				description: 'Définit la taille de l’icône à `1.5em`.'
			},
			{
				name: 'large',
				type: 'boolean',
				default: false,
				description: 'Définit la taille de l’icône à `1.85em`.'
			},
			{
				name: 'x-large',
				type: 'boolean',
				default: false,
				description: 'Définit la taille de l’icône à `2.25em`.'
			},
			{
				name: 'size',
				type: 'string',
				default: 'undefined',
				description: 'Applique une taille CSS personnalisée (largeur / hauteur) à l’icône.<br>Par défaut, la taille est de `1,35em`.'
			},
			{
				name: 'label',
				type: 'string',
				default: 'undefined',
				description: 'Le label accessible de l’icône.<br>Par défaut, l’icône est masquée pour les lecteurs d’écran.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu de l’icône.'
			}
		]
	}
};
