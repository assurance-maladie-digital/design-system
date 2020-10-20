module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: 'vue-eslint-parser',
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'@vue/typescript/recommended'
	],
	rules: {
		// Allow logs in development but not in production
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

		'indent': 'off',

		// Force semi-colons
		'semi': 'off',

		// Remove space in functions, eg. function()
		'space-before-function-paren': ['error', 'never'],

		// Maximum 1 empty line
		'no-multiple-empty-lines': ['error', { 'max': 1 }],

		// Remove trailing coma
		'comma-dangle': ['error', 'never'],

		// Force single quotes
		'quotes': ['error', 'single'],

		// No trailing spaces
		'no-trailing-spaces': 'error',

		// Enforces one true brace style, eg.
		// if () {
		// }
		'brace-style': ['error', '1tbs'],

		// Limit .vue files to 350 lines
		'max-lines': ['error', {
			'max': 350,
			'skipBlankLines': true,
			'skipComments': true
		}],

		'object-curly-spacing': ['error', 'always'],

		// Force arrow functions
		'prefer-arrow-callback': 'error',

		'no-prototype-builtins': 'off',

		/*--------------------- vue rules ---------------------*/

		// Tab indent in templates
		'vue/html-indent': ['error', 'tab'],

		// Allow v-html
		'vue/no-v-html': ['off'],

		// Disallow spaces around equal in HTML attributes
		// eg. attr= "value" is invalid
		'vue/no-spaces-around-equal-signs-in-attribute': ['error'],

		// Enforce specific casing for the Prop name in Vue components
		'vue/prop-name-casing': ['error'],

		// Require default value for props
		'vue/require-default-prop': ['error'],

		// Require type definitions in props
		'vue/require-prop-types': ['error'],

		// .vue <script> indent
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
			'ignores': []
		}],

		// Enforce order of properties in components
		'vue/order-in-components': ['error'],

		// This rule requires or disallows blank lines between the given 2 blocks.
		'vue/padding-line-between-blocks': ['error', 'always'],

		// Enforce or forbid parentheses after method calls without arguments in v-on directives
		'vue/v-on-function-call': ['error',
			'never',
			{
				'ignoreIncludesComment': false
			}
		],

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

		/*--------------------- ts rules ---------------------*/

		// Require or disallow semicolons instead of ASI
		'@typescript-eslint/semi': ['error'],

		// Require explicit return and argument types on exported functions' and classes' public class methods
		'@typescript-eslint/explicit-module-boundary-types': [
			'error',
			{
				'allowedNames': [
					'beforeCreate',
					'created',
					'beforeMount',
					'mounted',
					'beforeUpdate',
					'updated',
					'beforeDestroy',
					'destroyed'
				]
			}
		],

		// Disallow the declaration of empty interfaces
		'@typescript-eslint/no-empty-interface': 'error',

		// Require a consistent member declaration order
		'@typescript-eslint/member-ordering': ['error',
			{
				'classes': [
					'signature',
					'field',
					'method'
				]
			}
		]
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				// Waiting on https://github.com/vuejs/eslint-plugin-vue/issues/1260
				'vue/custom-event-name-casing': 'off'
			}
		},
		{
			files: ['*.js'],
			rules: {
				// Allow require() in JS files
				'@typescript-eslint/no-var-requires': 'off'
			}
		},
		{
			files: ['*.spec.ts'],
			rules: {
				// Sometimes in tests we mock more than one component
				'vue/one-component-per-file': 'off'
			}
		}
	],
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
};
