module.exports = {
	plugins: [
		'cypress'
	],
	env: {
		mocha: true,
		'cypress/globals': true
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/triple-slash-reference': 'off'
	}
};
