// Build configuration
const webpack = require('webpack');

// If LIB_MODE is true, we're building the library
// else, we're building the dev environment
const LIB_MODE = Boolean(process.env.LIB_MODE); // Use Boolean() to convert undefined to false
const LIMIT_SIZE = 315000;

process.env.VUE_APP_VERSION = require('./package.json').version;

const LIB_MODE_CONFIG = {
	// No source map on library mode, we don't need them
	// because we're publishing the source
	productionSourceMap: false,
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
			/^core-js/,
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

const DEV_MODE_CONFIG = {
	configureWebpack: {
		entry: './dev/main.ts'
	},
	chainWebpack: (config) => {
		// Use index.html in dev folder
		config
			.plugin('html')
			.tap(args => {
				args[0].template = './dev/index.html';

				return args;
			});
	},
	transpileDependencies: [
		'vuetify',
		'vue-input-facade'
	]
};

const currentConfig = LIB_MODE ? LIB_MODE_CONFIG : DEV_MODE_CONFIG;

module.exports = currentConfig;
