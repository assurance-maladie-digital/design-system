module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser'
	},
	env: {
		node: true,
		es6: true,
		jest: true
	},
	plugins: [
		'@typescript-eslint'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		// Allow logs in development but not in production
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

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

		// Sparing around type annotations
		'@typescript-eslint/type-annotation-spacing': 'error',

		// Spacing between keys and values in objects
		'key-spacing': ['error', {
			'beforeColon': false,
			'mode': 'strict'
		}],

		// Spacing around infix operators
		'space-infix-ops': 'error',

		// Maximum 1 empty line
		'no-multiple-empty-lines': ['error', {
			max: 1,
			maxEOF: 0,
			maxBOF: 0
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
			max: 300000000,
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
			files: [
				'*.js'
			],
			rules: {
				// Allow require() in JS files
				'@typescript-eslint/no-var-requires': 'off'
			}
		}
	],
	ignorePatterns: [
		'tests/unit/coverage',
		'dist/'
	]
};
