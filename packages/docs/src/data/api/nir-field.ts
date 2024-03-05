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
			}
		],
		slots: [
			{
				name: 'tooltip',
				description: 'Slot pour remplacer le contenu du tooltip.'
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
