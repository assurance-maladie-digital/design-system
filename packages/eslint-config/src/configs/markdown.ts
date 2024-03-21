import { type FlatESLintConfigItem } from 'eslint-define-config';
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from '../globs';
import { pluginMarkdown } from '../plugins';

export const markdown: FlatESLintConfigItem[] = [
	{
		plugins: {
			markdown: pluginMarkdown,
		},
	},
	{
		files: [GLOB_MARKDOWN],
		processor: 'markdown/markdown',
	},
	{
		files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					impliedStrict: true,
				},
			},
		},
		rules: {
			'antfu/no-cjs-exports': 'off',
			'antfu/no-ts-export-equal': 'off',

			'no-alert': 'off',
			'no-console': 'off',
			'no-undef': 'off',
			'no-unused-expressions': 'off',
			'no-unused-vars': 'off',

			'node/prefer-global/process': 'off',

			'style/comma-dangle': 'off',
			'style/eol-last': 'off',

			'ts/consistent-type-imports': 'off',
			'ts/no-namespace': 'off',
			'ts/no-redeclare': 'off',
			'ts/no-require-imports': 'off',
			'ts/no-unused-vars': 'off',
			'ts/no-use-before-define': 'off',
			'ts/no-var-requires': 'off',

			'unicode-bom': 'off',
			'unused-imports/no-unused-imports': 'off',
			'unused-imports/no-unused-vars': 'off',

			// Type aware rules
			'ts/await-thenable': 'off',
			'ts/dot-notation': 'off',
			'ts/no-floating-promises': 'off',
			'ts/no-for-in-array': 'off',
			'ts/no-implied-eval': 'off',
			'ts/no-misused-promises': 'off',
			'ts/no-throw-literal': 'off',
			'ts/no-unnecessary-type-assertion': 'off',
			'ts/no-unsafe-argument': 'off',
			'ts/no-unsafe-assignment': 'off',
			'ts/no-unsafe-call': 'off',
			'ts/no-unsafe-member-access': 'off',
			'ts/no-unsafe-return': 'off',
			'ts/restrict-plus-operands': 'off',
			'ts/restrict-template-expressions': 'off',
			'ts/unbound-method': 'off',
		},
	},
];
