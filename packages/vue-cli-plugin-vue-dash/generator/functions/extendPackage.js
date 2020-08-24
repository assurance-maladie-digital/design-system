const vdPkg = require('../../package.json');

function normalizeVersion(version) {
	// If the version is an alpha or a beta
	if (version.includes('alpha') || version.includes('beta')) {
		// Remove ^ char to avoid version auto-bump
		return version.replace('^', '');
	}

	return version;
}

// Use dev dependencies to get packages versions
const VueDotVersion = normalizeVersion(vdPkg.devDependencies['@cnamts/vue-dot'] || 'next');
const DesignTokensVersion = normalizeVersion(vdPkg.devDependencies['@cnamts/design-tokens'] || 'next');

/** Extend package.json */
function extendPackage(api, options) {
	const newPackageProperties = {
		dependencies: {
			'@cnamts/design-tokens': DesignTokensVersion,
			'@cnamts/vue-dot': VueDotVersion,
			'axios': '^0.19.2',
			'core-js': '^3.6.5',
			'dayjs': '^1.8.33',
			'languages': '^0.1.3',
			'vue-input-facade': '^1.3.2',
			'vue-meta': '^2.4.0',
			'vuetify': '^2.3.8'
		},
		devDependencies: {
			'@babel/core': '^7.11.1',
			'@types/webfontloader': '^1.6.32',
			'@mdi/js': '^5.5.55',
			'@typescript-eslint/eslint-plugin': '^3.9.1',
			'@typescript-eslint/parser': '^3.9.1',
			'@types/jest': '26.0.10',
			'babel-jest': '^26.3.0',
			'jest': '^26.4.0',
			'jest-serializer-vue': '^2.0.2',
			'ts-jest': '^26.2.0',
			'vue-class-component': '^7.2.5',
			'vue-cli-plugin-vuetify': '^2.0.7',
			'vuetify-loader': '^1.6.0',
			'webfontloader': '^1.6.28',
			'webpack': '^4.44.1'
		}
	};

	if (options.i18n) {
		newPackageProperties.dependencies['vue-i18n'] = '^8.21.0';
	}

	if (options.vuexPersist) {
		// We need 2.0.1 specifically since in
		// later version there is a bug with
		// Internet Explorer
		newPackageProperties.dependencies['vuex-persist'] = '2.0.1';
	}

	api.extendPackage(newPackageProperties);
}

module.exports = extendPackage;
