module.exports = {
	plugins: [
		'jsdoc',
		'vuejs-accessibility'
	],
	extends: [
		'@cnamts/eslint-config-vue',
		'plugin:jsdoc/recommended',
		'plugin:vuejs-accessibility/recommended'
	],
	parser: 'vue-eslint-parser',
	rules: {
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
		'vuejs-accessibility/no-static-element-interactions': 0
	}
};
