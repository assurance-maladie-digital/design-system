import { type FlatESLintConfigItem } from 'eslint-define-config'
import { ESLint } from 'eslint'
import { GLOB_YAML } from '../globs'
import { parserYaml, pluginYaml } from '../plugins'

export const yaml: FlatESLintConfigItem[] = [
	{
		plugins: {
			yaml: pluginYaml as ESLint.Plugin,
		},
	},
	{
		files: [GLOB_YAML],
		languageOptions: {
			parser: parserYaml,
		},
		rules: {
			'style/spaced-comment': 'off',

			// base rules
			'yaml/block-mapping-question-indicator-newline': 'error',
			'yaml/block-mapping': 'error',
			'yaml/block-sequence-hyphen-indicator-newline': 'error',
			'yaml/block-sequence': 'error',
			'yaml/file-extension': 'error',
			'yaml/indent': ['error', 2],
			'yaml/no-empty-document': 'error',
			'yaml/no-empty-key': 'error',
			'yaml/no-empty-mapping-value': 'error',
			'yaml/no-empty-sequence-entry': 'error',
			'yaml/no-tab-indent': 'error',
			'yaml/plain-scalar': 'error',
			'yaml/quotes': ['error', { avoidEscape: false, prefer: 'single' }],
			'yaml/vue-custom-block/no-parsing-error': 'error',
			// extension rules
			'yaml/flow-mapping-curly-newline': 'error',
			'yaml/flow-mapping-curly-spacing': 'error',
			'yaml/flow-sequence-bracket-newline': 'error',
			'yaml/flow-sequence-bracket-spacing': 'error',
			'yaml/key-spacing': 'error',
			'yaml/no-irregular-whitespace': 'error',
			'yaml/spaced-comment': 'error',
		},
	},
]
