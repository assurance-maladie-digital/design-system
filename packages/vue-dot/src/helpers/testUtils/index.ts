import Vue, { VueConstructor } from 'vue';

import { config } from '@vue/test-utils';

import { addVApp } from '../../../tests/utils/addVApp';

/** Function to apply global config */
export function applyGlobalConfig(): void {
	/** Function to init mocks */
	function setMocks(): void {
		// If mocks is undefined, init it
		if (!config.mocks) {
			config.mocks = {};
		}

		// Mock i18n functions
		config.mocks.$t = (key: string) => key;
		config.mocks.$tc = (key: string) => key;
	}

	setMocks();
	addVApp();
}

import InputFacade from 'vue-input-facade';
import Meta from 'vue-meta';
import VueDot from '../../../src';
import Vuex, { Store, StoreOptions } from 'vuex';

import Vuetify, { UserVuetifyPreset } from 'vuetify';

/** Install global plugins on localVue */
export function installGlobalPlugins(localVue: VueConstructor<Vue>): void {
	localVue.use(InputFacade);
	localVue.use(Meta);
	localVue.use(VueDot);
	localVue.use(Vuex);

	Vue.use(Vuetify);
}

/** Install router on localVue */
export function installRouter(localVue: VueConstructor<Vue>): void {
	localVue.use(VueRouter);
}

import VueRouter, { RouterOptions } from 'vue-router';
import { IndexedObject, VForm } from '../../types';

/** Create a router */
export function createRouter(options?: RouterOptions): VueRouter {
	return new VueRouter(options);
}

/** Create a store */
export function createStore<T = unknown>(options: StoreOptions<T>): Store<T> {
	return new Vuex.Store(options);
}

/** Create a Vuetify instance */
export function createVuetifyInstance(preset?: Partial<UserVuetifyPreset>): Vuetify {
	return new Vuetify(preset);
}

/** Mock a VForm ref */
export function mockVFormRef(isValid: boolean): VForm {
	return {
		validate: () => isValid,
		resetValidation: () => undefined,
		reset: () => undefined
	};
}

/** Mock translations */
export function mockTranslations<T>(translations: IndexedObject<T>): IndexedObject<(key: string) => T | string> {
	return {
		$t: (key: string) => translations[key] ?? key
	};
}

// Re-export elements from Vue Test Utils to simplify imports
export * from '@vue/test-utils';
