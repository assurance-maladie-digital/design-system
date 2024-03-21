import { type FlatESLintConfigItem } from 'eslint-define-config';
import { ESLint } from 'eslint';
import { pluginCasePolice } from '../plugins';

export const casePolice: FlatESLintConfigItem[] = [
	{
		plugins: {
			case: pluginCasePolice as unknown as ESLint.Plugin,
		},
		rules: {
			'case/string-check': 'error',
		},
	},
];
