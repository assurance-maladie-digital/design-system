module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: 'vue-eslint-parser',
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:jsdoc/recommended',
		'@cnamts/eslint-config'
	],
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				// The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
				// does not work with type definitions
				'no-unused-vars': 'off'
			}
		},
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off'
			}
		}
	],
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	plugins: [
		'jsdoc'
	]
};
