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
		'comma-dangle': ['error', 'never'],
		'space-before-blocks': ['error', 'always'],
		'keyword-spacing': ['error', { 'before': true }],
		'vue/component-name-in-template-casing': ['error', 'PascalCase', {
			'ignores': [
				'transition'
			]
		}],
		'quotes': ['error', 'single'],
		'no-trailing-spaces': 'error',
		'brace-style': ['error', '1tbs'],
		'vue/no-v-html': 'off',
		'max-lines': ['error', {
			'max': 330,
			'skipBlankLines': true,
			'skipComments': true
		}]
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
