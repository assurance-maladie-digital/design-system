import { type FlatESLintConfigItem } from 'eslint-define-config'
import { pluginUnicorn } from '../plugins'

export const unicorn: FlatESLintConfigItem[] = [
	{
		plugins: {
			unicorn: pluginUnicorn,
		},
		rules: {
			// TODO: configure
		},
	},
]
