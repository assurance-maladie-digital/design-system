const { devDependencies } = require('../../package.json');

/**
 * Pin version for alpha and beta and default to `next`
 *
 * @param {string|undefined} version The version to normalize
 * @returns {string} The normalized version
 */
function normalizeVersion(version) {
	if (!version) {
		return 'next';
	}

	// If the version is an alpha or a beta
	if (version.includes('alpha') || version.includes('beta')) {
		// Remove ^ char to avoid version auto-bump
		return version.replace('^', '');
	}

	return version;
}

// Use dev dependencies to get packages versions
const VueDotVersion = normalizeVersion(devDependencies['@cnamts/vue-dot']);
const DesignTokensVersion = normalizeVersion(devDependencies['@cnamts/design-tokens']);
const FormBuilderVersion = normalizeVersion(devDependencies['@cnamts/form-builder']);

/**
 * Extend package.json
 *
 * @param {object} api The plugin API
 * @param {object} options The plugin options
 * @param {string} pm The package manager
 * @returns {void}
 */
function extendPackage(api, options, pm) {
	const newPackageProperties = {
		scripts: {
			'serve': 'vue-cli-service serve',
			'build': 'vue-cli-service build',
			'lint': 'vue-cli-service lint',
			'test:unit': 'vue-cli-service test:unit'
		},
		dependencies: {
			'@cnamts/design-tokens': DesignTokensVersion,
			'@cnamts/form-builder': FormBuilderVersion,
			'@cnamts/vue-dot': VueDotVersion,
			'axios': '^0.24.0',
			'core-js': '^3.19.3',
			'custom-event-polyfill': '^1.0.7',
			'dayjs': '^1.10.7',
			'languages': '^0.1.3',
			'vue': '^2.6.14',
			'vue-input-facade': '^1.3.7',
			'vue-meta': '^2.4.0',
			'vue-router': '^3.5.3',
			'vuetify': '^2.6.1',
			'vuex': '^3.6.2'
		},
		devDependencies: {
			'@babel/core': '^7.16.0',
			'@mdi/js': '^6.5.95',
			'@types/jest': '^26.0.24',
			'@types/webfontloader': '^1.6.33',
			'@typescript-eslint/eslint-plugin': '^5.6.0',
			'@typescript-eslint/parser': '^5.6.0',
			'@vue/cli-plugin-babel': '~4.5.15',
			'@vue/cli-plugin-eslint': '~4.5.15',
			'@vue/cli-plugin-router': '~4.5.15',
			'@vue/cli-plugin-typescript': '~4.5.15',
			'@vue/cli-plugin-unit-jest': '~4.5.15',
			'@vue/cli-plugin-vuex': '~4.5.15',
			'@vue/cli-service': '~4.5.15',
			'@vue/eslint-config-standard': '^6.1.0',
			'@vue/eslint-config-typescript': '^8.0.0',
			'@vue/test-utils': '^1.3.0',
			'eslint': '^7.32.0',
			'eslint-plugin-import': '^2.25.3',
			'eslint-plugin-node': '^11.1.0',
			'eslint-plugin-promise': '^5.2.0',
			'eslint-plugin-vue': '^7.20.0',
			'jest-serializer-vue': '^2.0.2',
			"lint-staged": "^12.1.7",
			'sass': '1.32.13', /** @see https://github.com/vuetifyjs/vuetify/issues/13694 */
			'sass-loader': '^10.2.0',
			'ts-node': '^10.4.0',
			'typescript': '~4.5.3',
			'vue-class-component': '^7.2.6',
			'vue-cli-plugin-vuetify': '^2.4.5',
			'vue-template-compiler': '^2.6.14',
			'vuetify-loader': '^1.7.3',
			'webfontloader': '^1.6.28',
			'webpack': '^4.46.0'
		},
		resolutions: {
			'jest': '^26.6.3',
			'ts-jest': '^26.5.6',
			'babel-jest': '^26.6.3'
		},
		engines: {
			'node': '^12 || ^14'
		},
		gitHooks: {
			'pre-commit': 'lint-staged'
		},
		'lint-staged': {
			'*.{ts,vue}': [
				'vue-cli-service lint',
				'git add'
			]
		}
	};

	if (pm === 'npm') {
		newPackageProperties.devDependencies['deepmerge'] = '^4.2.2'; /** @see https://github.com/assurance-maladie-digital/vue-cli-preset/issues/5 */
		newPackageProperties.engines['npm'] = '^7.20.6';
	} else if (pm === 'yarn') {
		newPackageProperties.engines['yarn'] = '^1.12';
	}

	if (options.i18n) {
		newPackageProperties.dependencies['vue-i18n'] = '^8.26.7';
	}

	if (options.vuexPersist) {
		// We need 2.0.1 specifically since in
		// later version there is a bug with
		// Internet Explorer
		newPackageProperties.dependencies['vuex-persist'] = '2.0.1';
	}

	if (options.cypress) {
		newPackageProperties.devDependencies['@vue/cli-plugin-e2e-cypress'] = '~4.5.15';

		newPackageProperties.scripts['test:e2e'] = 'vue-cli-service test:e2e --headless';
		newPackageProperties.scripts['test:e2e:gui'] = 'vue-cli-service test:e2e';

		newPackageProperties.resolutions['cypress'] = '^9.1.1';
	}

	api.extendPackage(newPackageProperties);
}

module.exports = { extendPackage };
