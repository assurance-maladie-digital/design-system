import { Api } from '~/types';

export const api: Api = {
	installGlobalPlugins: {
		arguments: [
			{
				name: 'localVue',
				description: 'L’instance de vue à laquelle ajouter les différents plugins.',
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
