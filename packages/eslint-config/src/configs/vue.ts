import { type Parser, type FlatESLintConfigItem } from 'eslint-define-config'
import { parserTs, parserVue, pluginVue } from '../plugins'
import { GLOB_VUE } from '../globs'
import { hasTypeScript } from '../env'

export const vue: FlatESLintConfigItem[] = [
	{
		plugins: {
			vue: pluginVue,
		},
	},
	{
		files: [GLOB_VUE],
		languageOptions: {
			parser: parserVue,
			parserOptions: {
				extraFileExtensions: ['.vue'],
				parser: hasTypeScript ? parserTs as unknown as Parser : undefined,
				sourceType: 'module',
			},
		},
		processor: pluginVue.processors['.vue'],
		rules: {
			// TODO: configure
		},
	},
]
