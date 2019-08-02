module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'@vue/typescript'
	],
	rules: {
		// Allow logs in development
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

		// Tab indent in templates
		'vue/html-indent': ['error', 'tab'],
		'indent': 'off',

		// Disallow spaces around equal in HTML attributes
		// eg. attr= "value" is invalid
		'vue/no-spaces-around-equal-signs-in-attribute': true,

		// 1 empty line maximum
		'no-multiple-empty-lines': ['error', { max: 1 }],

		// Force semi
		'semi': ['error', 'always'],

		// Remove space in functions, eg. function()
		'space-before-function-paren': ['error', 'never'],

		// .vue <script> indent
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
			'ignores': []
		}],

		// Remove trailing coma
		'comma-dangle': ['error', 'never'],

		'space-before-blocks': ['error', 'always'],
		'keyword-spacing': ['error', { 'before': true }],

		// Force PascalCase for component names
		'vue/component-name-in-template-casing': ['error', 'PascalCase', {
			'ignores': [
				'keep-alive',
				'component',
				'transition',
				'transition-group'
			]
		}],

		// Single quotes
		'quotes': ['error', 'single'],

		// No trailing spaces
		'no-trailing-spaces': 'error',

		// Enforces one true brace style, eg.
		// if () {
		// }
		'brace-style': ['error', '1tbs'],

		// Allow v-html
		'vue/no-v-html': 'off',

		// Limit .vue files to 330 lines
		'max-lines': ['error', {
			'max': 330,
			'skipBlankLines': true,
			'skipComments': true
		}],

		'object-curly-spacing': ['error', 'always']
	},
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				'vue/script-indent': 'off',
				'indent': ['error', 'tab'],
				'semi': 'off'
			}
		}
	],
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
};
