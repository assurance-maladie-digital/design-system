import { Api } from '~/types';

export const api: Api = {
	PasswordField: {
		props: [
			{
				name: 'value',
				type: 'string',
				default: null,
				description: 'La valeur saisie par l’utilisateur.'
			},
			{
				name: 'required',
				type: 'boolean',
				default: false,
				description: 'Rends le ou les champ(s) obligatoire(s) en utilisant la règle de validation [`required`](/composants-techniques/regles-de-validation/required).'
			}
		],
		events: [
			{
				name: 'update:value',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'string'
			}
		]
	}
};
