import { type FlatESLintConfigItem } from 'eslint-define-config'
import globals from 'globals'
import { pluginAntfu, pluginUnusedImports } from '../plugins'
import { GLOB_SRC, GLOB_SRC_EXT } from '../globs'

export const javascript: FlatESLintConfigItem[] = [
	{
		languageOptions: {
			ecmaVersion: 2022,
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
				document: 'readonly',
				navigator: 'readonly',
				window: 'readonly',
			},
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		plugins: {
			'antfu': pluginAntfu,
			'unused-imports': pluginUnusedImports,
		},
		rules: {
			// TODO: configure
		},
	},
	{
		files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
		rules: {
			'no-console': 'off',
		},
	},
]
