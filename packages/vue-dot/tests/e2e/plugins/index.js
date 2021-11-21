const { startDevServer } = require('@cypress/webpack-dev-server');
const webpackConfig = require('@vue/cli-service/webpack.config.js');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {

  require('@cypress/code-coverage/task')(on, config);
  initPlugin(on, config);

  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

  on('dev-server:start', options => {
      return startDevServer({
        options,
        webpackConfig
      });
  });
  return config;
};
