import { Api } from '~/types';

export const api: Api = {
	FileUpload: {
		props: [
			{
				name: 'multiple',
				type: 'boolean',
				default: false,
				description: 'Permet de sélectionner plusieurs fichiers.'
			},
			{
				name: 'value',
				type: 'File | File[]',
				default: '[]',
				description: 'Le ou les fichiers sélectionnés.'
			},
			{
				name: 'no-ripple',
				type: 'boolean',
				default: false,
				description: 'Désactive l\'ondulation.'
			},
			{
				name: 'disabled',
				type: 'boolean',
				default: false,
				description: 'Désactive le composant.'
			},
			{
				name: 'file-size-max',
				type: 'number',
				default: '10485760',
				description: 'Taille maximale d\'un fichier en octets (par défaut 10 MB).'
			},
			{
				name: 'file-size-units',
				type: 'string[]',
				default: `[
					'o', 
					'Ko', 
					'Mo',
					'Go', 
					'To'
				]`,
				description: 'Les unités de taille utilisées pour la traduction.'
			},
			{
				name: 'allowed-extensions',
				type: 'string[]',
				default: `[
					'pdf',
					'jpg',
					'jpeg',
					'png'
				]`,
				description: 'Les extensions autorisées.'
			},
			{
				name: 'accept',
				type: 'string',
				default: 'undefined',
				description: 'L\'attribut natif `accept`. Par défaut, la valeur sera calculée à partir des extensions autorisées.'
			},
			{
				name: 'max-width',
				type: 'number | string',
				default: 'undefined',
				description: 'La largeur maximale du composant.'
			},
			{
				name: 'min-width',
				type: 'number | string',
				default: 'undefined',
				description: 'La largeur minimale du composant.'
			},
			{
				name: 'width',
				type: 'number | string',
				default: 'undefined',
				description: 'La largeur du composant.'
			}
		],
		slots: [
			{
				name: 'placeholder',
				description: 'Slot pour remplacer le contenu par défaut.'
			},
			{
				name: 'icon',
				description: 'Slot pour remplacer l\'icône par défaut.'
			},
			{
				name: 'action-text',
				description: 'Slot pour remplacer le texte d\'action.'
			},
			{
				name: 'or',
				description: 'Slot pour remplacer le texte `Ou`.'
			},
			{
				name: 'button-text',
				description: 'Slot pour remplacer le label du bouton d\'action.'
			},
			{
				name: 'info-text',
				description: 'Slot pour remplacer les informations sur le fichier à sélectionner.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'File | File[]'
			},
			{
				name: 'error',
				description: 'Événement émis lorsque lorsqu\'il y a une erreur de validation.',
				value: `{
	file: File,
	code: ErrorCodes
}`
			}
		]
	}
};
