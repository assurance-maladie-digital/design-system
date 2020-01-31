const fixEnvFile = require('./fixEnvFile');

module.exports = (api) => {
	const { serve } = api.service.commands;

	const serveFn = serve.fn;

	// Augment serve command with fixEnvFile
	serve.fn = (...args) => {
		fixEnvFile();

		return serveFn(...args);
	};
};
