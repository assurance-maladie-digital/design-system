import { Api } from '~/types';

export const api: Api = {
	parseDate: {
		arguments: [
			{
				name: 'value',
				type: 'string',
				description: 'The date to parse'
			}
		],
		returnValue: [
			{
				type: 'string'
			}
		]
	}
};
