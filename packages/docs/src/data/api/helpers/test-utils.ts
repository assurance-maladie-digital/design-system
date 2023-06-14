import { Api } from "~/types";

export const api: Api = {
	testUtils: {
		arguments: [
			{
				name: 'applyGlobalConfig',
				description: 'Function to apply global config',
				type: 'void',
				required: true
			},
			{
				name: 'installGlobalPlugins',
				description: 'Install global plugins on localVue',
				type: 'void',
				required: true
			},
			{
				name: 'installRouter',
				description: 'Install router on localVue',
				type: 'void',
				required: true
			},
			{
				name: 'createRouter',
				description: 'Create a router',
				type: 'VueRouter',
				required: true
			},
			{
				name: 'createStore',
				description: 'Create a store',
				type: 'Store',
				required: true
			},
			{
				name: 'createVuetifyInstance',
				description: 'Create a Vuetify instance',
				type: 'Vuetify',
				required: true
			},
			{
				name: 'mockVFormRef',
				description: 'Mock a VForm ref',
				type: 'VForm',
				required: true
			},
			{
				name: 'mockTranslations',
				description: 'Mock translations',
				type: 'IndexedObject',
				required: true
			}
		],
		returnValue: [
			{
				type: 'html()'
			}
		],
	},
};
