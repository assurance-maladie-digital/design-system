import Vue, { VueConstructor } from 'vue';

import { config } from '@vue/test-utils';

import { addVApp } from '@cnamts/vue-dot/tests/utils/addVApp';

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
import VueDot from '@cnamts/vue-dot';
import Vuex, { Store, StoreOptions } from 'vuex';

import Vuetify, { UserVuetifyPreset } from 'vuetify';

/** Function to install global plugins */
export function installGlobalPlugins(localVue: VueConstructor<Vue>): void {
	localVue.use(InputFacade);
	localVue.use(Meta);
	localVue.use(VueDot);
	localVue.use(Vuex);

	Vue.use(Vuetify);
}

/** Function to install router */
export function installRouter(localVue: VueConstructor<Vue>): void {
	localVue.use(VueRouter);
}

import VueRouter, { RouterOptions } from 'vue-router';
import { FormRef } from '@cnamts/vue-dot/src/types';
import { IndexedObject } from '@cnamts/vue-dot/src/types';

/** Function to create router */
export function createRouter(options?: RouterOptions): VueRouter {
	return new VueRouter(options);
}

/** Function to create store */
export function createStore<T = unknown>(options: StoreOptions<T>): Store<T> {
	return new Vuex.Store(options);
}

/** Function to create vuetify instance */
export function createVuetifyInstance(preset?: Partial<UserVuetifyPreset>): Vuetify {
	return new Vuetify(preset);
}

/** Function to mock VFormRef */
export function mockVFormRef(isValid: boolean): FormRef {
	return {
		validate: () => isValid,
		resetValidation: () => undefined,
		reset: () => undefined
	};
}

/** Function to mock VFormRef */
export function mockTranslation<T>(keyToMock: string, data: T): IndexedObject<(key: string) => T | string> {
	return {
		$t: (key: string) => key === keyToMock ? data : key
	};
}

// Re-export elements from Vue Test Utils to simplify imports
export * from '@vue/test-utils';
