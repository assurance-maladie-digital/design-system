// Vue CLI configuration
// see https://cli.vuejs.org/guide/ for help
module.exports = {
	configureWebpack: {
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		},
		performance: {
			hints: false
		}
	},
	// Transpile ES6 inside dependencies
	transpileDependencies: [
		/node_modules[/\\\\]vuetify[/\\\\]/,
		'vuex-persist'
	],
	// Disable parallel build on the plateform
	parallel: process.env.NODE_ENV !== 'production'
};
