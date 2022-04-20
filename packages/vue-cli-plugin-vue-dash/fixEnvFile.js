const fs = require('fs');
const consola = require('consola');

const ENV_DIST_PATH = 'public/js/config.js.dist';
const ENV_PATH = 'public/js/config.js';

const { getPath } = require('./utils');

/**
 * Copy env file if missing to save debugging time
 *
 * @returns {void}
 */
function fixEnvFile() {
	const envFilePathDist = getPath(ENV_DIST_PATH);
	const envFilePath = getPath(ENV_PATH);

	const shouldCopyFile = !fs.existsSync(envFilePath) && fs.existsSync(envFilePathDist);

	if (shouldCopyFile) {
		consola.warn('Fix missing config.js file');

		fs.copyFileSync(envFilePathDist, envFilePath);

		consola.info(`Copied ${ENV_DIST_PATH} to ${ENV_PATH}`);
	}
}

module.exports = { fixEnvFile };
