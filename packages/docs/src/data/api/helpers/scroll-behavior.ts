import { Api } from '~/types';

export const api: Api = {
	scrollBehavior: {
		arguments: [
			{
				name: 'to',
				type: 'Route',
				description: 'The target route'
			},
			{
				name: 'from',
				type: 'Route',
				description: 'The current route'
			},
			{
				name: 'savedPosition',
				type: 'void | Position',
				description: 'The saved position'
			}
		],
		returnValue: [
			{
				type: 'PositionResult'
			}
		]
	}
};
