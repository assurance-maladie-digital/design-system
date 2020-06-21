export = {
    extends: [
        './lint-parser',
        'plugin:@typescript-eslint/recommended'
      ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
		ecmaVersion: 2018
	},
}