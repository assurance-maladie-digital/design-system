import { Api } from '~/types';

export const api: Api = {
	PeriodField: {
		props: [
			{
				name: 'outlined',
				type: 'boolean',
				description: 'Si défini, le champ sera affiché avec un contour.',
				default: 'false'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur du champ est mise à jour.',
				value: 'FieldValue'
			}
		],
	}
};
