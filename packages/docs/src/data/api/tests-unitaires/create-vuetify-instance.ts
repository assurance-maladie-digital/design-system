import { Api } from '~/types';

export const api: Api = {
	mockTranslation: {
		arguments: [
			{
				name: 'preset',
				description: 'Les options de vuetify.',
				type: 'Partial<UserVuetifyPreset>',
				required: false
			}
		],
		returnValue: [
			{
				type: 'Vuetify'
			}
		]
	}
};
