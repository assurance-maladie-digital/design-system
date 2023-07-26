import { Api } from '~/types';

export const api: Api = {
	applyGlobalConfig: {
		returnValue: [
			{
				type: 'void'
			}
		]
	},
	installGlobalPlugins: {
		arguments: [
			{
				name: 'localVue',
				description: 'L’instance de Vue à utiliser.',
				type: 'Vue',
				required: true
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	},
	installRouter: {
		arguments: [
			{
				name: 'localVue',
				description: 'L’instance de Vue à utiliser.',
				type: 'Vue',
				required: true
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	},
	createRouter: {
		arguments: [
			{
				name: 'options',
				description: 'Options Vue Router.',
				type: 'RouterOptions',
				default: undefined
			}
		],
		returnValue: [
			{
				type: 'VueRouter'
			}
		]
	},
	createStore: {
		arguments: [
			{
				name: 'options',
				description: 'Options Vuex.',
				type: 'StoreOptions<T>',
				default: undefined
			}
		],
		returnValue: [
			{
				type: 'Store<T>'
			}
		]
	},
	createVuetifyInstance: {
		arguments: [
			{
				name: 'preset',
				description: 'Preset Vuetify.',
				type: 'Partial<UserVuetifyPreset>',
				default: undefined
			},
		],
		returnValue: [
			{
				type: 'Vuetify'
			}
		]
	},
	mockVFormRef: {
		arguments: [
			{
				name: 'isValid',
				description: 'Valeur de la propriété `isValid`.',
				type: 'boolean',
				required: true
			}
		],
		returnValue: [
			{
				type: 'VForm'
			}
		]
	},
	mockTranslations: {
		arguments: [
			{
				name: 'translations',
				description: 'Traductions à utiliser.',
				type: 'IndexedObject<T>',
				required: true
			}
		],
		returnValue: [
			{
				type: 'IndexedObject<(key: string) => T | string>'
			}
		]
	}
};
