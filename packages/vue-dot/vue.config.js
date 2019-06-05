const webpack = require('webpack');

// This is the build configuration
// If NODE_ENV is production, we're building the library
// else, we're running the playground

const entry = process.env.NODE_ENV === 'production' ? './src/index.ts' : './playground/main.ts';

module.exports = {
	// No source map, accelerates the dev server
	// and we don't need them because we're publishing the source
	productionSourceMap: false,
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
		plugins: [
			// Do not split to chunks when building the library
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: process.env.NODE_ENV === 'production' ? 1 : 9999
			})
		],
		// see https://github.com/vuetifyjs/vuetify/issues/4068#issuecomment-394890573
		externals: process.env.NODE_ENV === 'production' ?
			[
				{
					'vue': {
						commonjs: 'vue',
						commonjs2: 'vue',
						amd: 'vue',
						root: 'Vue'
					},
					'vuetify/lib': {
						commonjs: 'vuetify/lib',
						commonjs2: 'vuetify/lib',
						amd: 'vuetify/lib',
						root: 'Vuetify'
					}
				},
				/^dayjs/,
				/^languages/,
				/^vuex/
			]
			: []
	},
	chainWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
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

			// Use vuetify-loader
			config.plugin('VuetifyLoaderPlugin');
		}
	}
};
