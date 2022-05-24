module.exports = {
	plugins: [
		'jsdoc'
	],
	extends: [
		'@cnamts/eslint-config-vue',
		'plugin:jsdoc/recommended'
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
		'jsdoc/require-returns': 0
	}
};
