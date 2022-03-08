const { fixEnvFile } = require('./fixEnvFile');

/**
 * Augment serve command with fixEnvFile
 *
 * @param {object} api The plugin API
 * @returns {void}
 */
function augmentServeCommand(api) {
	const { serve } = api.service.commands;

	const serveFn = serve.fn;

	serve.fn = (...args) => {
		fixEnvFile();

		return serveFn(...args);
	};
}

module.exports = (api) => {
	augmentServeCommand(api);
};
