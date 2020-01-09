const vdPkg = require('../../package.json');
const VueDotVersion = vdPkg.version;

/** Extend package.json */
function extendPackage(api, options) {
	const newPackageProperties = {
		dependencies: {
			'@cnamts/vue-dot': `^${VueDotVersion}`,
			'axios': '^0.19.1',
			'core-js': '^3.6.2',
			'dayjs': '^1.8.19',
			'languages': '^0.1.3',
			'vue-class-component': '^7.1.0',
			'vue-meta': '^2.3.1',
			'vue-the-mask': '^0.11.1',
			'vuetify': '^2.2.3'
		},
		devDependencies: {
			'@babel/core': '^7.7.7',
			'@types/webfontloader': '^1.6.29',
			'@mdi/js': '^4.7.95',
			'@typescript-eslint/eslint-plugin': '^2.15.0',
			'@typescript-eslint/parser': '^2.15.0',
			'babel-jest': '^24.9.0',
			'jest': '^24.9.0',
			'jest-serializer-vue': '^2.0.2',
			'ts-jest': '^24.3.0',
			'vue-cli-plugin-vuetify': '^2.0.3',
			'vuetify-loader': '^1.4.3',
			'webfontloader': '^1.6.28',
			'webpack': '^4.41.5'
		}
	};

	if (options.i18n) {
		newPackageProperties.dependencies['vue-i18n'] = '^8.15.3';
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
