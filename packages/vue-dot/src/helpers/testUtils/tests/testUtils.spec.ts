import {
	applyGlobalConfig,
	createRouter,
	createStore,
	createVuetifyInstance,
	installGlobalPlugins,
	installRouter,
	mockTranslation,
	mockVFormRef
} from '../';

import { lightTheme } from '@cnamts/design-tokens';

import {
	config,
	createLocalVue
} from '@vue/test-utils';

import { RouterOptions } from 'vue-router';
import { StoreOptions } from 'vuex';
import { UserVuetifyPreset } from 'vuetify';

describe('utils', () => {
	it('should apply global config', () => {
		applyGlobalConfig();

		const { $t, $tc } = config.mocks;

		expect($t('path.to.translation')).toBe('path.to.translation');
		expect($tc('path.to.translation')).toBe('path.to.translation');
	});

	it('should apply global config when mocks are not initialized', () => {
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
		config.mocks = undefined as unknown as Record<string, any>;

		applyGlobalConfig();

		const { $t, $tc } = config.mocks;

		expect($t('path.to.translation')).toBe('path.to.translation');
		expect($tc('path.to.translation')).toBe('path.to.translation');
	});

	it ('should install global plugins', () => {
		const localVue = createLocalVue();

		installGlobalPlugins(localVue);

		expect(localVue).toMatchSnapshot();
	});

	it ('should install router', () => {
		const localVue = createLocalVue();

		installRouter(localVue);

		expect(localVue).toMatchSnapshot();
	});

	it ('should create router', () => {
		const router = createRouter();

		expect(router).toMatchSnapshot();
	});

	it ('should create router with options', () => {
		const options: RouterOptions = {
			mode: 'history',
			routes: []
		};

		const router = createRouter(options);

		expect(router).toMatchSnapshot();
	});

	it ('should create store', () => {
		const options: StoreOptions<unknown> = {
			actions: {},
			mutations: {},
			modules: {}
		};

		const store = createStore(options);

		expect(store).toMatchSnapshot();
	});

	it ('should create vuetify instance', () => {
		const vuetify = createVuetifyInstance();

		expect(vuetify).toMatchSnapshot();
	});

	it ('should create vuetify instance with preset', () => {
		const preset: Partial<UserVuetifyPreset> = {
			theme: {
				themes: {
					light: lightTheme
				}
			}
		};

		const vuetify = createVuetifyInstance(preset);

		expect(vuetify).toMatchSnapshot();
	});

	it ('should mock VFormRef valid', () => {
		const { validate, reset, resetValidation } = mockVFormRef(true);

		expect(validate()).toBe(true);
		expect(resetValidation()).toBe(undefined);
		expect(reset()).toBe(undefined);
	});

	it ('should mock VFormRef invalid', () => {
		const { validate, reset, resetValidation } = mockVFormRef(false);

		expect(validate()).toBe(false);
		expect(resetValidation()).toBe(undefined);
		expect(reset()).toBe(undefined);
	});

	it('should mock translation', () => {
		const { $t } = mockTranslation<string | string[]>({
			'path.to.translation': 'translation',
			'path.to.translations': [
				'translation1',
				'translation2'
			]
		});

		expect($t('path.to.translation')).toBe('translation');
		expect($t('path.to.translations')).toMatchSnapshot();
		expect($t('path.to.other.translation')).toBe('path.to.other.translation');
	});
});
