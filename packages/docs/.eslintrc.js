module.exports = {
	extends: '@cnamts/eslint-config',
	env: {
		browser: true
	},
	overrides: [
		{
			files: [
				'nuxt.config.js',
				'src/hooks/*.js'
			],
			parserOptions: {
				sourceType: 'module'
			}
		}
	]
};
