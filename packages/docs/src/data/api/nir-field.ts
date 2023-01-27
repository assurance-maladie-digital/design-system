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
				name: 'nir-number',
				type: 'number',
				default: 15,
				description: 'La longueur du NIR à saisir (13 caractères).'
			},
			{
				name: 'nir-key',
				type: 'number',
				default: 2,
				description: 'La longueur de la clé à saisir (2 caractères).'
			},
			{
				name: 'required',
				type: 'boolean',
				default: false,
				description: 'Rends le champ obligatoire en utilisant la règle de validation [`required`](/composants-techniques/regles-de-validation/required).'
			},
			{
				name: 'tooltip',
				type: 'string',
				default: null,
				description: 'Affiche un tooltip sur le champ.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'string'
			}
		]
	}
};
