const vdPkg = require('../../package.json');
// Use dev dependency to get Vue Dot version
let VueDotVersion = vdPkg.devDependencies['@cnamts/vue-dot'] || 'next';

// If the version is an alpha or a beta
if (VueDotVersion.includes('alpha') || VueDotVersion.includes('beta')) {
	// Remove ^ char to avoid version auto-bump
	VueDotVersion = VueDotVersion.replace('^', '');
}

/** Extend package.json */
function extendPackage(api, options) {
	const newPackageProperties = {
		dependencies: {
			'@cnamts/vue-dot': `${VueDotVersion}`,
			'axios': '^0.19.2',
			'core-js': '^3.6.5',
			'dayjs': '^1.8.28',
			'languages': '^0.1.3',
			'vue-input-facade': '1.3.1',
			'vue-meta': '^2.4.0',
			'vuetify': '^2.2.34'
		},
		devDependencies: {
			'@babel/core': '^7.10.4',
			'@types/webfontloader': '^1.6.32',
			'@mdi/js': '^5.3.45',
			'@typescript-eslint/eslint-plugin': '^3.5.0',
			'@typescript-eslint/parser': '^3.5.0',
			'@types/jest': '26.0.3',
			'babel-jest': '^26.1.0',
			'jest': '^26.1.0',
			'jest-serializer-vue': '^2.0.2',
			'ts-jest': '^26.1.1',
			'vue-class-component': '^7.2.3',
			'vue-cli-plugin-vuetify': '^2.0.6',
			'vuetify-loader': '^1.5.0',
			'webfontloader': '^1.6.28',
			'webpack': '^4.43.0'
		}
	};

	if (options.i18n) {
		newPackageProperties.dependencies['vue-i18n'] = '^8.18.2';
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
