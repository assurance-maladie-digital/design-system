import { Api } from '~/types';

export const api: Api = {
	applyGlobalConfig: {
		returnValue: [
			{
				type: 'void',
			},
		],
	},
	installGlobalPlugins: {
		arguments: [
			{
				name: 'localVue',
				description: 'Local Vue instance',
				type: 'Vue',
				required: true,
			},
		],
		returnValue: [
			{
				type: 'void',
			},
		],
	},
	installRouter: {
		arguments: [
			{
				name: 'localVue',
				description: 'Local Vue instance',
				type: 'Vue',
				required: true,
			},
		],
		returnValue: [
			{
				type: 'void',
			},
		],
	},
	createRouter: {
		arguments: [
			{
				name: 'options',
				description: 'Router options',
				type: 'RouterOptions',
				required: false,
			},
		],
		returnValue: [
			{
				type: 'VueRouter',
			},
		],
	},
	createStore: {
		arguments: [
			{
				name: 'options',
				description: 'Store options',
				type: 'StoreOptions',
				required: false,
			},
		],
		returnValue: [
			{
				type: 'Store',
			},
		],
	},
	createVuetifyInstance: {
		arguments: [
			{
				name: 'preset',
				description: 'Vuetify preset',
				type: 'Partial<UserVuetifyPreset>',
				required: true,
			},
		],
		returnValue: [
			{
				type: 'Vuetify',
			},
		],
	},
	mockVFormRef: {
		arguments: [
			{
				name: 'isValid',
				description: 'Is valid',
				type: 'boolean',
				required: true,
			},
		],
		returnValue: [
			{
				type: 'void',
			},
		],
	},
	mockTranslations: {
		arguments: [
			{
				name: 'translations',
				description: 'Translations',
				type: 'IndexedObject',
				required: true,
			},
		],
		returnValue: [
			{
				type: 'void',
			},
		],
	},
};
