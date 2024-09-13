import { Api } from '~/types';

export const api: Api = {
	NirField: {
		props: [
			{
				name: 'value',
				type: 'string',
				default: null,
				description: 'La valeur saisie par l’utilisateur.'
			},
			{
				name: 'nir-length',
				type: 'number',
				default: 15,
				description: 'La longueur du NIR à saisir (13 ou 15 caractères).',
				example: `13 | 15`
			},
			{
				name: 'required',
				type: 'boolean',
				default: false,
				description: 'Rends le ou les champ(s) obligatoire(s) en utilisant la règle de validation [`required`](/composants-techniques/regles-de-validation/required).'
			},
			{
				name: 'tooltip',
				type: 'string',
				default: null,
				description: 'Affiche un tooltip à côté du champ.'
			},
			{
				name: 'number-label',
				type: 'string',
				default: 'Numéro de sécurité sociale',
				description: 'Label de l\'input numberField.'
			},
			{
				name: 'key-label',
				type: 'string',
				default: 'Clé',
				description: 'Label de l\'input keyField.'
			},
		],
		slots: [
			{
				name: 'tooltip',
				description: 'Slot pour remplacer le contenu du tooltip.'
			},
			{
				name: 'number-append-icon',
				description: 'Slot pour ajouter une icône de validation pour l\'input numberField.'
			},
			{
				name: 'key-append-icon',
				description: 'Slot pour remplacer une icône de validation pour l\'input keyField.'
			}
		],
		events: [
			{
				name: 'input',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'string'
			},
			{
				name: 'change',
				description: 'Événement émis lorsque tous les champs sont complétés.',
				value: 'string'
			}
		]
	}
};
