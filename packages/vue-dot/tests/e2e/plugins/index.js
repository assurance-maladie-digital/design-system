const { startDevServer } = require('@cypress/webpack-dev-server');
const webpackConfig = require('@vue/cli-service/webpack.config.js');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {

  initPlugin(on, config);

  on('dev-server:start', options => {
      return startDevServer({
        options,
        webpackConfig
      });
  });
  return config;
};
