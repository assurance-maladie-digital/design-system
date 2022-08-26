import {
	applyGlobalConfig,
	createRouter,
	createStore,
	createVuetifyInstance,
	installGlobalPlugins,
	installRouter,
	mockTranslations,
	mockVFormRef
} from '../';

import { lightTheme } from '@cnamts/design-tokens';

import {
	config,
	createLocalVue
} from '@vue/test-utils';

import Vue, { VueConstructor } from 'vue';

import InputFacade from 'vue-input-facade';
import VueRouter, { RouterOptions } from 'vue-router';
import Meta from 'vue-meta';
import VueDot from '../../../../src';
import Vuex, { StoreOptions } from 'vuex';
import Vuetify, { UserVuetifyPreset } from 'vuetify';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface VueInstance extends Vue {
	_installedPlugins: any[];
}

/** Returns the value of _installedPlugins on a Vue instance */
function getPlugins(localVue: VueConstructor): any[] {
	return (localVue as unknown as VueInstance)._installedPlugins;
}

describe('testUtils', () => {
	it('applies the global config', () => {
		applyGlobalConfig();

		const { $t, $tc } = config.mocks;

		expect($t('path.to.translation')).toBe('path.to.translation');
		expect($tc('path.to.translation')).toBe('path.to.translation');
	});

	it('applies the global config when mocks are not initialized', () => {
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
		config.mocks = undefined as unknown as Record<string, any>;

		applyGlobalConfig();

		const { $t, $tc } = config.mocks;

		expect($t('path.to.translation')).toBe('path.to.translation');
		expect($tc('path.to.translation')).toBe('path.to.translation');
	});

	it('installs the global plugins', () => {
		const localVue = createLocalVue();

		installGlobalPlugins(localVue);

		const installedPlugins = getPlugins(localVue);
		const installedRootPlugins = getPlugins(Vue);

		expect(installedPlugins).toStrictEqual([
			InputFacade,
			Meta,
			VueDot,
			Vuex
		]);

		expect(installedRootPlugins).toStrictEqual([Vuetify]);
	});

	it('installs the router', () => {
		const localVue = createLocalVue();

		installRouter(localVue);

		const installedPlugins = getPlugins(localVue);

		expect(installedPlugins).toStrictEqual([VueRouter]);
	});

	it('creates a router', () => {
		const router = createRouter();

		expect(router instanceof VueRouter).toBeTruthy();
	});

	it('creates a router with options', () => {
		const options: RouterOptions = {
			mode: 'history',
			routes: []
		};

		const router = createRouter(options);

		expect(router instanceof VueRouter).toBeTruthy();
	});

	it('creates a store', () => {
		const options: StoreOptions<unknown> = {
			actions: {},
			mutations: {},
			modules: {}
		};

		const store = createStore(options);

		expect(store instanceof Vuex.Store).toBeTruthy();
	});

	it('creates a Vuetify instance', () => {
		const vuetify = createVuetifyInstance();

		expect(vuetify instanceof Vuetify).toBeTruthy();
	});

	it('creates a Vuetify instance with preset', () => {
		const preset: Partial<UserVuetifyPreset> = {
			theme: {
				themes: {
					light: lightTheme
				}
			}
		};

		const vuetify = createVuetifyInstance(preset);

		expect(vuetify instanceof Vuetify).toBeTruthy();
	});

	it('mocks a valid VForm ref', () => {
		const { validate, reset, resetValidation } = mockVFormRef(true);

		expect(validate()).toBeTruthy();
		expect(resetValidation()).toBeUndefined();
		expect(reset()).toBeUndefined();
	});

	it('mocks an invalid VForm ref', () => {
		const { validate, reset, resetValidation } = mockVFormRef(false);

		expect(validate()).toBeFalsy();
		expect(resetValidation()).toBeUndefined();
		expect(reset()).toBeUndefined();
	});

	it('mocks translations', () => {
		const translationsArrayMock = [
			'translation1',
			'translation2'
		];

		const { $t } = mockTranslations<string | string[]>({
			'path.to.translation': 'translation',
			'path.to.translations': translationsArrayMock
		});

		expect($t('path.to.translation')).toBe('translation');
		expect($t('path.to.translations')).toBe(translationsArrayMock);
		expect($t('path.to.other.translation')).toBe('path.to.other.translation');
	});
});
