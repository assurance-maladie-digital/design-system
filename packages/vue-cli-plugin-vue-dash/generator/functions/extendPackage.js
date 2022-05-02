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

	if (version.includes('alpha') || version.includes('beta')) {
		// Remove ^ char to avoid version auto-bump
		return version.replace('^', '');
	}

	return version;
}

const VueDotVersion = normalizeVersion(devDependencies['@cnamts/vue-dot']);
const DesignTokensVersion = normalizeVersion(devDependencies['@cnamts/design-tokens']);
const FormBuilderVersion = normalizeVersion(devDependencies['@cnamts/form-builder']);
const EslintConfigVueVersion = normalizeVersion(devDependencies['@cnamts/eslint-config-vue']);

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
			'@cnamts/eslint-config-vue': EslintConfigVueVersion,
			'@cnamts/design-tokens': DesignTokensVersion,
			'@cnamts/form-builder': FormBuilderVersion,
			'@cnamts/vue-dot': VueDotVersion,
			'axios': '^0.26.1',
			'core-js': '^3.21.1',
			'custom-event-polyfill': '^1.0.7',
			'dayjs': '^1.11.0',
			'languages': '^0.1.3',
			'vue': '^2.6.14',
			'vue-input-facade': '^2.0.0',
			'vue-meta': '^2.4.0',
			'vue-router': '^3.5.3',
			'vuetify': '^2.6.4',
			'vuex': '^3.6.2'
		},
		devDependencies: {
			'@babel/core': '^7.17.8',
			'@mdi/js': '^6.6.95',
			'@rushstack/eslint-patch': '^1.1.1',
			'@types/jest': '^27.4.1',
			'@types/webfontloader': '^1.6.34',
			'@typescript-eslint/eslint-plugin': '^5.16.0',
			'@typescript-eslint/parser': '^5.16.0',
			'@vue/cli-plugin-babel': '~5.0.4',
			'@vue/cli-plugin-eslint': '~5.0.4',
			'@vue/cli-plugin-router': '~5.0.4',
			'@vue/cli-plugin-typescript': '~5.0.4',
			'@vue/cli-plugin-unit-jest': '~5.0.4',
			'@vue/cli-plugin-vuex': '~5.0.4',
			'@vue/cli-service': '~5.0.4',
			'@vue/eslint-config-standard': '^6.1.0',
			'@vue/eslint-config-typescript': '^10.0.0',
			'@vue/test-utils': '^1.3.0',
			'@vue/vue2-jest': '^27.0.0-alpha.4',
			'babel-jest': '^27.5.1',
			'eslint': '^8.12.0',
			'eslint-plugin-import': '^2.25.4',
			'eslint-plugin-node': '^11.1.0',
			'eslint-plugin-promise': '^6.0.0',
			'eslint-plugin-vue': '^8.5.0',
			'jest': '^27.5.1',
			'jest-serializer-vue': '^2.0.2',
			'lint-staged': '^12.3.7',
			'sass': '~1.32.13', /** @see https://github.com/vuetifyjs/vuetify/issues/13694 */
			'sass-loader': '^12.6.0',
			'ts-jest': '^27.1.4',
			'ts-node': '^10.7.0',
			'typescript': '~4.6.3',
			'vue-class-component': '^7.2.6',
			'vue-cli-plugin-vuetify': '^2.4.8',
			'vue-template-compiler': '^2.6.14',
			'vuetify-loader': '^1.7.3',
			'webfontloader': '^1.6.28',
			'webpack': '^5.72.0'
		},
		engines: {
			'node': '^14 || ^16'
		},
		gitHooks: {
			'pre-commit': 'lint-staged'
		}
	};

	if (pm === 'npm') {
		newPackageProperties.devDependencies['deepmerge'] = '^4.2.2'; /** @see https://github.com/assurance-maladie-digital/vue-cli-preset/issues/5 */
		newPackageProperties.engines['npm'] = '^7.20.6';
	} else if (pm === 'yarn') {
		newPackageProperties.engines['yarn'] = '^1.12';
	}

	if (options.i18n) {
		newPackageProperties.dependencies['vue-i18n'] = '^8.27.0';
	}

	if (options.vuexPersist) {
		// We need 2.0.1 specifically since in later
		// versions there is a bug with IE 11
		newPackageProperties.dependencies['vuex-persist'] = '2.0.1';
	}

	if (options.cypress) {
		newPackageProperties.devDependencies['@vue/cli-plugin-e2e-cypress'] = '~5.0.4';
		newPackageProperties.devDependencies['cypress'] = '^9.5.2';

		newPackageProperties.scripts['test:e2e'] = 'vue-cli-service test:e2e --headless';
		newPackageProperties.scripts['test:e2e:gui'] = 'vue-cli-service test:e2e';
	}

	api.extendPackage(newPackageProperties);
}

module.exports = { extendPackage };
