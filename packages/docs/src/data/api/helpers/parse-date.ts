import { Api } from '~/types';

export const api: Api = {
	parseDate: {
		arguments: [
			{
				name: 'value',
				description: 'La date à parser.',
				type: 'string',
				required: true
			},
			{
				name: 'format',
				description: 'Le format de la date à parser.',
				type: 'string',
				default: `'DD/MM/YYYY'`
			}
		],
		returnValue: [
			{
				type: 'dayjs.Dayjs'
			}
		]
	}
};
