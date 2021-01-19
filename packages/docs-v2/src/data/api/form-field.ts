import { Api } from '~/types';

export const api: Api = {
	FormField: {
		props: [
			{
				name: 'field',
				type: 'Field',
				required: true,
				description: 'Le champ à afficher.',
				example: `
				{
					type: string;
					value: FieldValue;
					title?: string;
					description?: string;
					tooltip?: string;
					multiple?: boolean;
					fieldOptions?: FieldOptions;
					items?: FieldItem[];
					other?: OtherField;
					mask?: string;
					dynamic?: boolean;
				}`
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur du champ est mise à jour.',
				value: 'undefined'
			}
		]
	}
};
