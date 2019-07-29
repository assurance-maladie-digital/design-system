module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'@vue/typescript',
		'plugin:jsdoc/recommended'
	],
	rules: {
		// Allow logs in development but not in production
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

		// Tab indent in templates
		'vue/html-indent': ['error', 'tab'],
		'indent': 'off',

		// Disallow spaces around equal in HTML attributes
		// eg. attr= "value" is invalid
		'vue/no-spaces-around-equal-signs-in-attribute': true,

		// Force semi-colons
		'semi': 'off',
		'@typescript-eslint/semi': ['error'],

		// Remove space in functions, eg. function()
		'space-before-function-paren': ['error', 'never'],

		// .vue <script> indent
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
			'ignores': []
		}],

		// Maximum 1 empty line
		'no-multiple-empty-lines': ['error', { max: 1 }],

		// Remove trailing coma
		'comma-dangle': ['error', 'never'],

		// Force PascalCase for component names
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				'ignores': [
					'keep-alive',
					'component',
					'transition',
					'transition-group'
				]
			}
		],

		// Force single quotes
		'quotes': ['error', 'single'],

		// No trailing spaces
		'no-trailing-spaces': 'error',

		// Enforces one true brace style, eg.
		// if () {
		// }
		'brace-style': ['error', '1tbs'],

		// Allow v-html
		'vue/no-v-html': false,

		// Limit .vue files to 330 lines
		'max-lines': ['error', {
			'max': 330,
			'skipBlankLines': true,
			'skipComments': true
		}],

		'object-curly-spacing': ['error', 'always'],

		// Force arrow functions
		'prefer-arrow-callback': 'error',

		// JSDOC: Don't force all params & return
		'jsdoc/require-param': 0,
		'jsdoc/require-returns': 0
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	plugins: [
		'jsdoc'
	]
};
