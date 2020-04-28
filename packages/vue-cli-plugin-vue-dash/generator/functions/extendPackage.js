const vdPkg = require('../../package.json');
const VueDotVersion = vdPkg.version;

/** Extend package.json */
function extendPackage(api, options) {
	const newPackageProperties = {
		dependencies: {
			'@cnamts/vue-dot': `${VueDotVersion}`,
			'axios': '^0.19.2',
			'core-js': '^3.6.4',
			'dayjs': '^1.8.19',
			'languages': '^0.1.3',
			'vue-meta': '^2.3.2',
			'vue-the-mask': '^0.11.1',
			'vuetify': '^2.2.6'
		},
		devDependencies: {
			'@babel/core': '^7.8.3',
			'@types/webfontloader': '^1.6.29',
			'@mdi/js': '^4.8.95',
			'@typescript-eslint/eslint-plugin': '^2.17.0',
			'@typescript-eslint/parser': '^2.17.0',
			'babel-jest': '^25.4.0',
			'jest': '^25.4.0',
			'jest-serializer-vue': '^2.0.2',
			'ts-jest': '^25.4.0',
			'vue-class-component': '^7.2.2',
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
