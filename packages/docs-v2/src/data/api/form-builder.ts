import { Api } from '~/types';

export const api: Api = {
	FormBuilder: {
		props: [
			{
				name: 'form',
				type: 'Form',
				required: true,
				description: 'Le questionnaire à afficher.',
				example: `{
	[sectionId]: {
		title?: string;
		description?: string;
		questions: FormFieldList;	
	}
}`
			}
		],
		events: [
			{
				name: 'change',
				description: `Événement émis lorsque la valeur d'un champ est mise à jour.`,
				value: 'form: Form'
			},
			{
				name: 'refresh',
				description: `Événement émis lorsque la valeur d'un champ dynamique est mise à jour.`,
				value: undefined
			}
		]
	}
};
