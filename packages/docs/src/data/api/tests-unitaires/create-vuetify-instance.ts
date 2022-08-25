import { Api } from '~/types';

export const api: Api = {
	createVuetifyInstance: {
		arguments: [
			{
				name: 'preset',
				description: 'Les options de l’instance Vuetify.',
				type: 'Partial<UserVuetifyPreset>',
				default: undefined
			}
		],
		returnValue: [
			{
				type: 'Vuetify'
			}
		]
	}
};
