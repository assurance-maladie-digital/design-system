module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/recommended',
		'eslint:recommended',
		'@vue/typescript'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/html-indent': ['error', 'tab'],
		'indent': 'off',
		'vue/no-spaces-around-equal-signs-in-attribute': true,
		'semi': ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
			'ignores': []
		}],
		'vue/no-v-html': false
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
};
