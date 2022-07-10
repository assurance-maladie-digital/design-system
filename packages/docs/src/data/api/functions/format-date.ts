import { Api } from '~/types';

export const api: Api = {
	formatDate: {
		arguments: [
			{
				name: 'date',
				description: 'La date à formatter.',
				type: 'Dayjs',
				required: true
			},
			{
				name: 'format',
				description: 'Le [format Day.js](https://day.js.org/docs/en/display/format) à appliquer.',
				type: 'string',
				default: `'DD/MM/YYYY'`
			}
		],
		returnValue: [
			{
				type: 'string'
			}
		]
	}
};
