const { startDevServer } = require('@cypress/webpack-dev-server');
const webpackConfig = require('@vue/cli-service/webpack.config.js');

module.exports = (on, config) => {
  if (process.env.NODE_ENV === 'test') {
    require('@cypress/code-coverage/task')(on, config)
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
  }
  
  on('dev-server:start', options => {
      return startDevServer({
        options, 
        webpackConfig
      })
  }
  )
  return config
}
