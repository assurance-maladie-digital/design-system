// Build configuration
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// If LIB_MODE is true, we're building the library
// else, we're building the playground
const LIB_MODE = Boolean(process.env.LIB_MODE); // Use Boolean() to convert undefined to false
const LIMIT_SIZE = 300000;

const entry = LIB_MODE ? './src/index.ts' : './playground/main.ts';

module.exports = {
	// No source map on library mode, accelerates the dev server
	// and we don't need them because we're publishing the source
	productionSourceMap: !LIB_MODE,
	css: {
		// Extract CSS to separate file for SSR
		// (in SSR mode without a separate file, an error is thrown
		// because the styles are appended to <head>)
		extract: true
	},
	configureWebpack: {
		entry,
		output: {
			libraryExport: 'default'
		},
		performance: {
			// Only show hints in lib mode
			hints: LIB_MODE ? 'error' : false,
			maxEntrypointSize: LIMIT_SIZE,
			maxAssetSize: LIMIT_SIZE
		},
		plugins: [],
		// see https://github.com/vuetifyjs/vuetify/issues/4068#issuecomment-394890573
		externals: LIB_MODE ?
			[
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
			: []
	},
	chainWebpack: (config) => {
		if (LIB_MODE) {
			// Do not split to chunks when building the library
			config.optimization.delete('splitChunks');
			config.optimization.splitChunks(false);
		} else {
			// Use index.html in playground folder
			config
				.plugin('html')
				.tap(args => {
					args[0].template = './playground/public/index.html';

					return args;
				});
		}
	}
};

if (!LIB_MODE) {
	// Copy public folder content from /playground
	module.exports.configureWebpack.plugins.push(
		new CopyPlugin([{
			from: path.join(__dirname, './playground/public'),
			to: path.join(__dirname, './dist'),
			toType: 'dir',
			ignore: [
				'index.html',
				'.DS_Store'
			]
		}])
	);
} else {
	module.exports.configureWebpack.plugins.push(
		// Do not split to chunks when building the library
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		})
	);
}
