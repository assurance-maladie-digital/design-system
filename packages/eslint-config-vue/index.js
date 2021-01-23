module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: 'vue-eslint-parser',
	extends: [
		'@cnamts/eslint-config/typescript',
		'plugin:vue/recommended',
		'@vue/typescript/recommended'
	],
	rules: {
		// Allow logs in development but not in production
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

		// Tab indent in templates
		'vue/html-indent': ['error', 'tab'],

		// Disallow spaces around equal in HTML attributes
		// eg. attr= "value" is invalid
		'vue/no-spaces-around-equal-signs-in-attribute': ['error'],

		// .vue <script> indent
		'vue/script-indent': ['error', 'tab', {
			baseIndent: 1,
			switchCase: 1,
			ignores: []
		}],

		// Allow modifiers in slot names
		// eg. <template v-slot.foo>
		'vue/valid-v-slot': ['error', {
			allowModifiers: true
		}],

		// Allow event names like click:row
		'vue/custom-event-name-casing': ['error', {
			ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u']
		}],

		// Force PascalCase for component names
		'vue/component-name-in-template-casing': ['error', 'PascalCase', {
			ignores: [
				'keep-alive',
				'component',
				'transition',
				'transition-group'
			]
		}],

		// Allow v-html
		'vue/no-v-html': ['off'],

		'@typescript-eslint/explicit-module-boundary-types': ['error', {
			allowedNames: [
				'beforeCreate',
				'created',
				'beforeMount',
				'mounted',
				'beforeUpdate',
				'updated',
				'beforeDestroy',
				'destroyed'
			]
		}]
	},
	overrides: [
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
		},
		{
			files: ['*.vue'],
			rules: {
				'@typescript-eslint/indent': ['off']
			}
		}
	],
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
};
