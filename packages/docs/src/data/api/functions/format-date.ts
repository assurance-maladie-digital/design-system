import { Api } from '~/types';

export const api: Api = {
	formatDate: {
		arguments: [
			{
				name: 'date',
				description: 'La date a formatter',
				type: 'Dayjs',
				required: true
			},
			{
				name: 'format',
				description: 'Le [format dayjs](https://day.js.org/docs/en/display/format) a appliquer',
				type: 'string',
				default: 'DD/MM/YYYY'
			}
		],
		response: [
			{
				type: 'string'
			}
		]
	}
};
