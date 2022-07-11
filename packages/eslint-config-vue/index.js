module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'@cnamts/eslint-config/typescript',
		'plugin:vue/recommended',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser'
	},
	rules: {
		// Tab indent in templates
		'vue/html-indent': ['error', 'tab'],
		'@typescript-eslint/indent': ['off'],

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

		'vue/valid-v-slot': ['error', {
			allowModifiers: true
		}],

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
			files: [
				'*.spec.ts'
			],
			rules: {
				// Sometimes in tests we mock more than one component
				'vue/one-component-per-file': 'off'
			}
		}
	]
};
