const fixEnvFile = require('./fixEnvFile');
const { vueDotLoader } = require('./vueDotLoader');

/**
 * @param {object} api The plugin API
 * @returns {void}
 */
function augmentServeCommand(api) {
	const { serve } = api.service.commands;

	const serveFn = serve.fn;

	// Augment serve command with fixEnvFile
	serve.fn = (...args) => {
		fixEnvFile();

		return serveFn(...args);
	};
}

/**
 * @param {object} api The plugin API
 * @returns {void}
 */
function configureVuetifyLoader(api) {
	const dependencies = api.service.pkg.dependencies || {};
	const devDependencies = api.service.pkg.devDependencies || {};

	const hasVuetifyLoader = Boolean(
		devDependencies['vuetify-loader'] ||
		dependencies['vuetify-loader']
	);

	if (hasVuetifyLoader) {
		api.chainWebpack(config => {
			config
				.plugin('VuetifyLoaderPlugin')
				.tap(() => vueDotLoader);
		});
	}
}

module.exports = (api) => {
	augmentServeCommand(api);
	configureVuetifyLoader(api);
};
