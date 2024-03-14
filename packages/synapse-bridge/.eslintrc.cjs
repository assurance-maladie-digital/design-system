module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ["vuejs-accessibility"],
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/typescript/recommended',
		'eslint:recommended',
		'plugin:jsx-a11y/recommended',
		"plugin:vuejs-accessibility/recommended"
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		//0 = off, 1 = warn, 2 = error
	},
};
