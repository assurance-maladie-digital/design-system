// Build configuration
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// If LIB_MODE is true, we're building the library
// else, we're building the playground
const LIB_MODE = Boolean(process.env.LIB_MODE); // Use Boolean() to convert undefined to false
const LIMIT_SIZE = 550000;
const CI = Boolean(process.env.CI);
const CIRCLE_NODE_TOTAL = parseFloat(process.env.CIRCLE_NODE_TOTAL);

process.env.VUE_APP_VERSION = require('./package.json').version;

const LIB_MODE_CONFIG = {
	// No source map on library mode, we don't need them
	// because we're publishing the source
	productionSourceMap: false,
	parallel: CI ? CIRCLE_NODE_TOTAL : undefined,
	css: {
		// Extract CSS to separate file for SSR
		// (in SSR mode without a separate file, an error is thrown
		// because the styles are appended to <head>)
		extract: true
	},
	configureWebpack: {
		entry: './src/index.ts',
		output: {
			libraryExport: 'default'
		},
		performance: {
			hints: 'error',
			maxEntrypointSize: LIMIT_SIZE,
			maxAssetSize: LIMIT_SIZE
		},
		plugins: [
			// Do not split to chunks when building the library
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 1
			})
		],
		// see https://github.com/vuetifyjs/vuetify/issues/4068#issuecomment-394890573
		externals: [
			{
				'vue': {
					commonjs: 'vue',
					commonjs2: 'vue',
					amd: 'vue',
					root: 'Vue'
				}
			},
			/^vuetify/,
			/^dayjs/,
			/^languages/,
			/^vuex/,
			/^@mdi\/js/
		]
	},
	chainWebpack: (config) => {
		// Do not split to chunks when building the library
		config.optimization.delete('splitChunks');
		config.optimization.splitChunks(false);
	}
};

const PLAYGROUND_MODE_CONFIG = {
	configureWebpack: {
		entry: './playground/main.ts',
		plugins: [
			// Copy public folder content from /playground
			new CopyPlugin({
				patterns: [{
					from: path.join(__dirname, './playground/public'),
					to: path.join(__dirname, './dist'),
					toType: 'dir',
					globOptions: {
						ignore: [
							'index.html',
							'.DS_Store'
						]
					}
				}]
			})
		]
	},
	chainWebpack: (config) => {
		// Use index.html in playground folder
		config
			.plugin('html')
			.tap(args => {
				args[0].template = './playground/public/index.html';

				return args;
			});
	}
};

const currentConfig = LIB_MODE ? LIB_MODE_CONFIG : PLAYGROUND_MODE_CONFIG;

module.exports = currentConfig;
