module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2018
	},
	env: {
		node: true,
		es6: true,
		jest: true
	},
	extends: [
		'eslint:recommended'
	],
	rules: {
		'indent': ['error', 'tab'],

		// Force semi
		'semi': ['error', 'always'],

		// Remove space in functions, eg. function()
		'space-before-function-paren': ['error', 'never'],

		// Remove trailing coma
		'comma-dangle': ['error', 'never'],

		'space-before-blocks': ['error', 'always'],
		'keyword-spacing': ['error', {
			before: true
		}],

		// Single quotes
		'quotes': ['error', 'single'],

		// No trailing spaces
		'no-trailing-spaces': 'error',

		// Enforces one true brace style, eg.
		// if () {
		// }
		'brace-style': ['error', '1tbs'],

		// Limit .vue files to 350 lines
		'max-lines': ['error', {
			max: 350,
			skipBlankLines: true,
			skipComments: true
		}],

		// Prefer const
		'prefer-const': 'error',

		// No var
		'no-var': 'error'
	}
};
