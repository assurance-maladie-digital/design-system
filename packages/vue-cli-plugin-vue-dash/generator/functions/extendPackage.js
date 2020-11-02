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
 * @returns {void}
 */
function extendPackage(api, options) {
	const newPackageProperties = {
		dependencies: {
			'@cnamts/design-tokens': DesignTokensVersion,
			'@cnamts/vue-dot': VueDotVersion,
			'axios': '^0.20.0',
			'core-js': '^3.6.5',
			'custom-event-polyfill': '^1.0.7',
			'dayjs': '^1.9.3',
			'languages': '^0.1.3',
			'vue-input-facade': '^1.3.2',
			'vue-meta': '^2.4.0',
			'vuetify': '^2.3.14'
		},
		devDependencies: {
			'@babel/core': '^7.12.3',
			'@mdi/js': '^5.7.55',
			'@types/jest': '26.0.14',
			'@types/webfontloader': '^1.6.32',
			'@typescript-eslint/eslint-plugin': '^4.1.1',
			'@typescript-eslint/parser': '^4.1.1',
			'babel-jest': '^26.5.2',
			'jest': '^26.5.3',
			'jest-serializer-vue': '^2.0.2',
			'ts-jest': '^26.4.1',
			'vue-class-component': '^7.2.6',
			'vue-cli-plugin-vuetify': '^2.0.7',
			'vuetify-loader': '^1.6.0',
			'webfontloader': '^1.6.28',
			'webpack': '^4.44.2'
		}
	};

	if (options.i18n) {
		newPackageProperties.dependencies['vue-i18n'] = '^8.22.0';
	}

	if (options.formBuilder) {
		newPackageProperties.dependencies['@cnamts/form-builder'] = FormBuilderVersion;
	}

	if (options.vuexPersist) {
		// We need 2.0.1 specifically since in
		// later version there is a bug with
		// Internet Explorer
		newPackageProperties.dependencies['vuex-persist'] = '2.0.1';
	}

	api.extendPackage(newPackageProperties);
}

module.exports = { extendPackage };
