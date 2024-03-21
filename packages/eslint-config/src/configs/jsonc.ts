import { type FlatESLintConfigItem } from 'eslint-define-config';
import { ESLint } from 'eslint';
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs';
import { parserJsonc, pluginJsonc } from '../plugins';

export const jsonc: FlatESLintConfigItem[] = [
	{
		plugins: {
			jsonc: pluginJsonc as unknown as ESLint.Plugin,
		},
	},
	{
		files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
		languageOptions: {
			parser: parserJsonc,
		},
		rules: {
			// base rules
			'jsonc/no-bigint-literals': 'error',
			'jsonc/no-binary-expression': 'error',
			'jsonc/no-binary-numeric-literals': 'error',
			'jsonc/no-escape-sequence-in-identifier': 'error',
			'jsonc/no-hexadecimal-numeric-literals': 'error',
			'jsonc/no-infinity': 'error',
			'jsonc/no-nan': 'error',
			'jsonc/no-number-props': 'error',
			'jsonc/no-numeric-separators': 'error',
			'jsonc/no-octal-numeric-literals': 'error',
			'jsonc/no-parenthesized': 'error',
			'jsonc/no-plus-sign': 'error',
			'jsonc/no-regexp-literals': 'error',
			'jsonc/no-template-literals': 'error',
			'jsonc/no-undefined-value': 'error',
			'jsonc/no-unicode-codepoint-escapes': 'error',
			'jsonc/valid-json-number': 'error',
			'jsonc/vue-custom-block/no-parsing-error': 'error',
			// extension rules
			'jsonc/array-bracket-newline': ['error', {
				multiline: true,
				minItems: null,
			}],
			'jsonc/array-bracket-spacing': ['error', 'never'],
			'jsonc/comma-dangle': ['error', 'never'],
			'jsonc/comma-style': ['error', 'last'],
			'jsonc/indent': ['error', 'tab'],
			'jsonc/key-spacing': ['error', {
				beforeColon: false,
				afterColon: true,
			}],
			'jsonc/no-dupe-keys': 'error',
			'jsonc/no-floating-decimal': 'error',
			'jsonc/no-irregular-whitespace': 'error',
			'jsonc/no-multi-str': 'error',
			'jsonc/no-octal-escape': 'error',
			'jsonc/no-octal': 'error',
			'jsonc/no-sparse-arrays': 'error',
			'jsonc/no-useless-escape': 'error',
			'jsonc/object-curly-newline': ['error', {
				consistent: true,
				multiline: true,
			}],
			'jsonc/object-curly-spacing': ['error', 'always'],
			'jsonc/object-property-newline': ['error'],
			'jsonc/quote-props': ['error', 'always'],
			'jsonc/quotes': ['error', 'double'],
			'jsonc/space-unary-ops': 'error',
		},
	},
];
