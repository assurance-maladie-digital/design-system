import { Api } from '~/types';

export const api: Api = {
	registerDirectives: {
		arguments: [
			{
				name: 'Vue',
				description: 'L’instance de Vue sur laquelle enregistrer les directives.',
				type: 'VueConstructor',
				required: true
			},
			{
				name: 'directives',
				description: 'Les directives à enregistrer.',
				type: 'Directives',
				required: true
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	}
};
