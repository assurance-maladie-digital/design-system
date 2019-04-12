// Vue CLI configuration
// see https://cli.vuejs.org/guide/ for help
module.exports = {
	configureWebpack: {
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		}
	},
	chainWebpack: config => {
		// Vuetify loader
		config.plugin('VuetifyLoaderPlugin');
	},
	// Transpile ES6 inside dependencies
	transpileDependencies: ['vuex-persist']
};
