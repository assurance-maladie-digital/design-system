module.exports = {
	plugins: [
		'jsdoc',
		'vuejs-accessibility',
		'jest-formatting'
	],
	extends: [
		'@cnamts/eslint-config-vue',
		'plugin:jsdoc/recommended',
		'plugin:vuejs-accessibility/recommended',
		'plugin:jest-formatting/recommended'
	],
	parser: 'vue-eslint-parser',
	rules: {
		'vue/singleline-html-element-content-newline': ['error', {
			'ignoreWhenNoAttributes': false,
			'ignoreWhenEmpty': false,
			'ignores': ['h6']
		}],
		'padding-line-between-statements': ['error',
			{blankLine: 'always', prev: '*', next: 'return'},
			{blankLine: 'always', prev: '*', next: 'const'}
		],
		'no-multi-spaces': 'error',
		'vue/padding-line-between-blocks': ['error', 'always'],
		'vue/multi-word-component-names': ['error', {
			ignores: [
				'Logo'
			]
		}],
		'vue/custom-event-name-casing': ['error', 'kebab-case', {
			ignores: [
				'/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'
			]
		}],
		// Don't force all params & return
		'jsdoc/require-param': 0,
		'jsdoc/require-returns': 0,
		'vuejs-accessibility/require-param': 0,
		'vuejs-accessibility/require-returns': 0,
		'vuejs-accessibility/aria-props': 0,
		'vuejs-accessibility/no-static-element-interactions': 0,
		'vuejs-accessibility/label-has-for': 0
	}
};
