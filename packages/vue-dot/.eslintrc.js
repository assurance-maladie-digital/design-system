module.exports = {
	extends: [
		'@cnamts/eslint-config-vue',
		'plugin:jsdoc/recommended'
	],
	rules: {
		// Don't force all params & return
		'jsdoc/require-param': 0,
		'jsdoc/require-returns': 0
	},
	ignorePatterns: [
		'tests/coverage'
	],
	plugins: [
		'jsdoc'
	]
};
