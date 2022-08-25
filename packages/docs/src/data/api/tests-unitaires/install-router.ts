import { Api } from '~/types';

export const api: Api = {
	installRouter: {
		arguments: [
			{
				name: 'localVue',
				description: 'L’instance de Vue à laquelle ajouter le router.',
				type: 'VueConstructor<Vue>',
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
