import { Api } from '~/types';

export const api: Api = {
	scrollBehavior: {
		arguments: [
			{
				name: 'to',
				description: 'La route cible.',
				type: 'Route',
				required: true
			},
			{
				name: 'from',
				description: 'La route actuelle.',
				type: 'Route',
				required: true
			},
			{
				name: 'savedPosition',
				description: 'La position sauvegardée.',
				type: 'Position | void',
				required: true
			}
		],
		returnValue: [
			{
				type: 'PositionResult'
			}
		]
	}
};
