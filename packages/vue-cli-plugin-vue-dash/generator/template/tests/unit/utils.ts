import Vue, { VueConstructor } from 'vue';

import { config } from '@vue/test-utils';

import { addVApp } from '@cnamts/vue-dot/tests/utils/addVApp';

export function applyGlobalConfig(): void {
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

export function installGlobalPlugins(localVue: VueConstructor<Vue>): void {
	localVue.use(InputFacade);
	localVue.use(Meta);
	localVue.use(VueDot);
	localVue.use(Vuex);

	Vue.use(Vuetify);
}

export function installRouter(localVue: VueConstructor<Vue>): void {
	localVue.use(VueRouter);
}

import VueRouter, { RouterOptions } from 'vue-router';
import { FormRef } from '@/types';
import { IndexedObject } from '@cnamts/vue-dot/src/types';

export function createRouter(options?: RouterOptions): VueRouter {
	return new VueRouter(options);
}

export function createStore<T = unknown>(options: StoreOptions<T>): Store<T> {
	return new Vuex.Store(options);
}

export function createVuetifyInstance(preset?: Partial<UserVuetifyPreset>): Vuetify {
	return new Vuetify(preset);
}

export function mockVFormRef(isValid: boolean): FormRef {
	return {
		validate: () => isValid,
		resetValidation: () => undefined,
		reset: () => undefined
	};
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function mockTranslation<T = any>(keyToMock: string, data: T): IndexedObject<(key: string) => T | string> {
	return {
		$t: (key: string) => key === keyToMock ? data : key
	};
}

// Re-export elements from Vue Test Utils to simplify imports
export * from '@vue/test-utils';

// Re-export html util (this won't be necessary once this file is included in Vue Dot)
export { html } from '@cnamts/vue-dot/tests/utils/html';
