module.exports = {
	extends: '@cnamts/eslint-config',
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
