import { Api } from '~/types';

export const api: Api = {
	registerDirectives: {
		arguments: [
			{
				name: 'Vue',
				type: 'VueConstructor',
				description: 'The global Vue instance'
			},
			{
				name: 'directives',
				type: 'Directives',
				description: 'The directives to register'
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	}
};
