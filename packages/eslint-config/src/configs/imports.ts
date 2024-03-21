import { type FlatESLintConfigItem } from 'eslint-define-config';
import { pluginAntfu, pluginImport } from '../plugins';

export const imports: FlatESLintConfigItem[] = [
	{
		plugins: {
			antfu: pluginAntfu,
			import: pluginImport,
		},

		/** @see https://github.com/import-js/eslint-plugin-import/issues/2556 */
		languageOptions: {
			parserOptions: {
				// Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
				// This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts'],
				'espree': [
					'.js',
					'.cjs',
					'.mjs',
					'.jsx',
				],
			},
		},

		rules: {
			'antfu/import-dedupe': 'error',
			'antfu/no-import-node-modules-by-path': 'error',

			// helpful
			'import/export': 'error',
			'import/no-empty-named-blocks': 'error',
			'import/no-extraneous-dependencies': 'error',
			'import/no-mutable-exports': 'error',
			// static analysis
			'import/default': 'error',
			'import/namespace': 'error',
			'import/no-absolute-path': 'error',
			'import/no-cycle': 'error',
			'import/no-self-import': 'error',
			'import/no-useless-path-segments': 'error',
			'import/no-webpack-loader-syntax': 'error',
			// style guide
			'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
			'import/first': 'error',
			'import/max-dependencies': [
				'error',
				{
					max: 16,
					ignoreTypeImports: false,
				},
			],
			'import/newline-after-import': [
				'error',
				{
					count: 1,
					considerComments: true,
				},
			],
			'import/no-duplicates': 'error',
			'import/no-named-default': 'error',
			'import/order': 'error',
		},
	},
];
