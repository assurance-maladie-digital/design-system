module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		jest: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		'indent': ['off'],
		'@typescript-eslint/indent': ['error', 'tab'],

		// Return types
		'@typescript-eslint/explicit-function-return-type': ['warn', {
			allowExpressions: true,
			allowTypedFunctionExpressions: true
		}],

		// Force semi
		'semi': 'off',
		'@typescript-eslint/semi': ['error'],

		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false
			}
		}],

		// Remove space in functions, eg. function()
		'space-before-function-paren': ['error', 'never'],

		// Maximum 1 empty line
		'no-multiple-empty-lines': ['error', {
			max: 1
		}],

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

		'object-curly-spacing': ['error', 'always'],

		// Force arrow functions
		'prefer-arrow-callback': 'error',

		'no-prototype-builtins': 'off',

		// Prefer const
		'prefer-const': 'error',

		// No var
		'no-var': 'error'
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				// Allow require() in JS files
				'@typescript-eslint/no-var-requires': 'off'
			}
		}
	],
	plugins: ['@typescript-eslint']
};
