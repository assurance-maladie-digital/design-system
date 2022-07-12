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
				description: 'La longueur du NIR a saisir (13 ou 15 caractères).'
			},
			{
				name: 'required',
				type: 'boolean',
				default: false,
				description: 'Rends le champ obligatoire en utilisant la règle de validation [`required`](/composants-techniques/regles-de-validation/required).'
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
