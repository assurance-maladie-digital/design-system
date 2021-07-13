import { Api } from '~/types';

export const api: Api = {
	ExternalLinks: {
		props: [
			{
				name: 'filters',
				type: 'Field[]',
				required: true,
				description: 'Tableau de champs à afficher.',
				example: `[
	{
		type: string;
		value: FieldValue;
		title?: string;
		description?: string;
		tooltip?: string;
		min?: number;
		max?: number;
		multiple?: boolean;
		fieldOptions?: FieldOptions;
		items?: FieldItem[];
		other?: OtherField;
		mask?: string;
		dynamic?: boolean;
	}
]`
			}
		]
	}
};
