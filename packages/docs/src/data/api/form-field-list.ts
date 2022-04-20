import { Api } from '~/types';

export const api: Api = {
	FormFieldList: {
		props: [
			{
				name: 'fields',
				type: 'Fields',
				required: true,
				description: 'La liste des champs à afficher.',
				example: `{
	fieldId: Field;
}`
			},
			{
				name: 'list-title',
				type: 'string',
				default: 'undefined',
				description: 'Le titre du formulaire.'
			},
			{
				name: 'description',
				type: 'string',
				default: 'undefined',
				description: 'La description du formulaire.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur d’un champ est mise à jour.',
				value: 'Fields'
			},
			{
				name: 'refresh',
				description: 'Événement émis lorsque la valeur d’un champ dynamique est mise à jour.',
				value: undefined
			}
		]
	}
};
