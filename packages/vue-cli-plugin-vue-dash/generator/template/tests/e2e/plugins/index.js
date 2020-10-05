const webpack = require('@cypress/webpack-preprocessor');
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	const options = {
		webpackOptions: require('../webpack.config')
	};
	on('file:preprocessor', webpack(options));
	return Object.assign({}, config, {
		fixturesFolder: 'tests/e2e/fixtures',
		integrationFolder: 'tests/e2e/integration',
		screenshotsFolder: 'tests/e2e/screenshots',
		videosFolder: 'tests/e2e/videos',
		supportFile: 'tests/e2e/support/index.ts'
	});
};
