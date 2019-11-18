const fixEnvFile = require('./fixEnvFile');

module.exports = (api) => {
	const { serve, build } = api.service.commands;

	const serveFn = serve.fn;
	const buildFn = build.fn;

	// Augment serve command with fixEnvFile
	serve.fn = (...args) => {
		fixEnvFile();

		return serveFn(...args);
	};

	// Augment build command with fixEnvFile
	build.fn = (...args) => {
		fixEnvFile();

		return buildFn(...args);
	};
};
