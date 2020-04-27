/**
 * If matomo confirmed by the user, import the script into the index.html file
 *
 * @param {boolean} isMatomo The matomo option
 * @param {string} indexFile The index file to parse as a string
 * @returns {string} The parsed file
 */
function configureMatomo(isMatomo, resources) {
	let script = '';
	let config = '';
	let configEnv = '';

	const indexPath = 'public/index.html';
	const configPath = 'public/js/config.js.dist';
	const configEnvPath = 'public/js/config.js.env';

	if(isMatomo) {
		script = '<script type="text/javascript" src="{BASE_URL}js/lib/matomo.js"></script>';
		config = '// Matomo\nconst MATOMO_ENABLED=\'false\';\nconst MATOMO_SITE_ID = \'\';'
		configEnv = '// Matomo\nconst MATOMO_ENABLED = \'{{ MATOMO_ENABLED }}\';\nconst MATOMO_SITE_ID = \'{{ MATOMO_SITE_ID }}\';'
	}
	
	// Replace {CONFIG_MATO} into the config dist file
	resources[configPath] = resources[configPath].replace(/{CONFIG_MATOMO}/g, config);
	
	// Replace {CONFIG_MATO} into the config dist file
	resources[configEnvPath] = resources[configEnvPath].replace(/{CONFIG_ENV_MATOMO}/g, configEnv);

	// Replace {SCRIPT_MATO} into the html file
 	resources[indexPath] = resources[indexPath].replace(/{SCRIPT_MATOMO}/g, script);

	return resources;
}

module.exports = configureMatomo;
