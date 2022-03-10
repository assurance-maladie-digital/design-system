const fs = require('fs');

const { log, warn, getPath } = require('@cnamts/cli-helpers');

const { fileExists } = require('./utils');

const ENV_DIST_PATH = 'public/js/config.js.dist';
const ENV_PATH = 'public/js/config.js';

/**
 * Copy env file if missing to save debugging time
 *
 * @returns {void}
 */
function fixEnvFile() {
	const envFilePathDist = getPath(ENV_DIST_PATH);
	const envFilePath = getPath(ENV_PATH);

	const shouldCopyFile = !fileExists(envFilePath) && fileExists(envFilePathDist);

	if (shouldCopyFile) {
		warn('Fix missing config.js file');

		fs.copyFileSync(envFilePathDist, envFilePath);

		log(`Copied ${ENV_DIST_PATH} to ${ENV_PATH}`);
		log();
	}
}

module.exports = { fixEnvFile };
