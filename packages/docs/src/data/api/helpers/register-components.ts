import { Api } from '~/types';

export const api: Api = {
	registerComponent: {
		arguments: [
			{
				name: 'Vue',
				type: 'VueConstructor',
				description: 'The global Vue instance'
			},
			{
				name: 'components',
				type: 'Components',
				description: 'The components to register'
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	}
};
