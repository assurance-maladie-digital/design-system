module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2020
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
		// Allow logs in development but not in production
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

		'indent': ['error', 'tab', {
			SwitchCase: 1
		}],

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
			max: 2000000000000,
			skipBlankLines: true,
			skipComments: true
		}],

		// Prefer const
		'prefer-const': 'error',

		// No var
		'no-var': 'error'
	},
	ignorePatterns: [
		'tests/unit/coverage',
		'dist/'
	]
};
