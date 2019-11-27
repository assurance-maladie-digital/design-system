const vdPkg = require('../../package.json');
const VueDotVersion = vdPkg.version;

/** Extend package.json */
function extendPackage(api, options) {
	const newPackageProperties = {
		dependencies: {
			'@cnamts/vue-dot': `^${VueDotVersion}`,
			'axios': '^0.19.0',
			'core-js': '^3.4.4',
			'dayjs': '^1.8.17',
			'languages': '^0.1.3',
			'vue-class-component': '^7.1.0',
			'vue-meta': '^2.3.1',
			'vue-the-mask': '^0.11.1',
			'vuetify': '^2.1.12'
		},
		devDependencies: {
			'@babel/core': '^7.7.4',
			'@babel/preset-env': '^7.7.4',
			'@types/webfontloader': '^1.6.29',
			'@mdi/js': '^4.6.95',
			'@typescript-eslint/eslint-plugin': '^2.9.0',
			'@typescript-eslint/parser': '^2.9.0',
			'babel-jest': '^24.9.0',
			'jest': '^24.9.0',
			'jest-serializer-vue': '^2.0.2',
			'ts-jest': '^24.2.0',
			'vue-cli-plugin-vuetify': '^2.0.2',
			'vuetify-loader': '^1.4.2',
			'webfontloader': '^1.6.28',
			'webpack': '^4.41.2'
		}
	};

	if (options.i18n) {
		newPackageProperties.dependencies['vue-i18n'] = '^8.15.1';
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
