const path = require('path') // used for resolving aliases
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
	'@storybook/addon-actions',
	'@storybook/addon-controls'
  ],
  webpackFinal: async (config, { configType }) => {
    // so I can import { storyFactory } from '~storybook/util/helpers'
    //config.resolve.alias['~storybook'] = path.resolve(__dirname)
    // the @ alias points to the `src/` directory, a common alias
    // used in the Vue community
    config.resolve.alias['@'] = path.dirname(path.resolve(__dirname))

    // THIS is the tricky stuff!
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
	  use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    // return the updated Storybook configuration
    return config
  }
}
