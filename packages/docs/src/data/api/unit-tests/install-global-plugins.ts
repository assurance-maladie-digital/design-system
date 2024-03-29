import { Api } from '~/types';

export const api: Api = {
	installGlobalPlugins: {
		arguments: [
			{
				name: 'localVue',
				description: 'L’instance Vue à laquelle ajouter les différents plugins.',
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
