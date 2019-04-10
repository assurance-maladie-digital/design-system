// Vue CLI configuration
// see https://cli.vuejs.org/guide/ for help
module.exports = {
	// Transpile ES6 inside dependencies
	transpileDependencies: ['vuex-persist'],
	devServer: {
		proxy: {
			// Redirect api requests in development mode
			'^/api': {
				target: 'http://localhost:3000/',
				changeOrigin: true
			}
		}
	}
};
