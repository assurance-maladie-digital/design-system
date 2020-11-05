// Vue CLI configuration
// see https://cli.vuejs.org/guide/ for help

process.env.VUE_APP_VERSION = require('./package.json').version;

const { vueDotLoader } = require('@cnamts/vue-cli-plugin-vue-dash/vueDotLoader');

module.exports = {
	chainWebpack: config => {
		// Auto-load VueDot components
		config.plugin('VuetifyLoaderPlugin').tap(vueDotLoader);
	},
	configureWebpack: {
		devtool: 'source-map',
		optimization: {
			splitChunks: {
				chunks: 'all',
				// Remove default ~ from filename
				// because it's blocked by firewall
				automaticNameDelimiter: '.'
			}
		},
		performance: {
			hints: false
		}
	},
	// Transpile ES6 inside dependencies
	transpileDependencies: [
		/node_modules[/\\\\]vuetify[/\\\\]/,
		'vuex-persist',
		'vue-input-facade'
	],
	// Disable parallel build on the platform
	parallel: process.env.NODE_ENV !== 'production'
};
