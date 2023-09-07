/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	plugins: ["vue", "jsdoc", "vuejs-accessibility"],
	extends: [
		// "@cnamts/eslint-config-vue",
		"plugin:vue/vue3-essential",
		"plugin:jsdoc/recommended",
		"plugin:vuejs-accessibility/recommended",
		"eslint:recommended",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier",
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		"vue/singleline-html-element-content-newline": ["error"],
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				prev: "*",
				next: "return",
			},
		],
		"no-multi-spaces": "error",
		"vue/padding-line-between-blocks": ["error", "always"],
		"vue/multi-word-component-names": [
			"error",
			{
				ignores: ["Logo"],
			},
		],
		"vue/custom-event-name-casing": [
			"error",
			"kebab-case",
			{
				ignores: ["/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u"],
			},
		],
		// Don't force all params & return
		"jsdoc/require-param": 0,
		"jsdoc/require-returns": 0,
		"vuejs-accessibility/require-param": 0,
		"vuejs-accessibility/require-returns": 0,
		"vuejs-accessibility/aria-props": 0,
		"vuejs-accessibility/no-static-element-interactions": 0,
		"vuejs-accessibility/label-has-for": 0,
	},
};
