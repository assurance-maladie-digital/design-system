import { ESLint } from 'eslint'
import { type FlatESLintConfigItem } from 'eslint-define-config'
import { parserTs, pluginTs } from '../plugins'
import { GLOB_TS } from '../globs'
import { renameRules } from '../utils'

export const typescript: FlatESLintConfigItem[] = [
	{
		files: [GLOB_TS],
		languageOptions: {
			parser: parserTs,
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			ts: pluginTs as unknown as ESLint.Plugin,
		},
		rules: {
			...renameRules(
				pluginTs.configs['eslint-recommended'].overrides![0].rules!,
				'@typescript-eslint/',
				'ts/',
			),
			...renameRules(
				pluginTs.configs.strict.rules!,
				'@typescript-eslint/',
				'ts/',
			),
			'antfu/generic-spacing': 'error',
			'antfu/named-tuple-spacing': 'error',
			'antfu/no-cjs-exports': 'error',

			'ts/no-non-null-assertion': 'off',
		},
	},
]
