const { fixEnvFile } = require('./fixEnvFile');

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

module.exports = (api) => {
	augmentServeCommand(api);
};
