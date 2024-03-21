import { type FlatESLintConfigItem } from 'eslint-define-config';
import { pluginVitest } from '../plugins';
import { GLOB_TESTS } from '../globs';
import { isInEditor } from '../env';

export const tests: FlatESLintConfigItem[] = [
	{
		plugins: {
			tests: pluginVitest,
		},
	},
	{
		files: GLOB_TESTS,
		rules: {
			'tests/consistent-test-it': [
				'error',
				{
					fn: 'it',
					withinDescribe: 'it',
				},
			],
			'tests/expect-expect': 'error',
			'tests/no-alias-methods': 'error',
			'tests/no-commented-out-tests': isInEditor ? 'off' : 'error',
			'tests/no-conditional-expect': 'error',
			'tests/no-disabled-tests': 'error',
			'tests/no-done-callback': 'error',
			'tests/no-duplicate-hooks': 'error',
			'tests/no-focused-tests': isInEditor ? 'off' : 'error',
			'tests/no-identical-title': 'error',
			'tests/no-interpolation-in-snapshots': 'error',
			'tests/no-standalone-expect': 'error',
			'tests/no-test-return-statement': 'error',
			'tests/prefer-comparison-matcher': 'error',
			'tests/prefer-equality-matcher': 'error',
			'tests/prefer-hooks-in-order': 'error',
			'tests/prefer-hooks-on-top': 'error',
			'tests/prefer-mock-promise-shorthand': 'error',
			'tests/prefer-spy-on': 'error',
			'tests/prefer-to-be-falsy': 'error',
			'tests/prefer-to-be-object': 'error',
			'tests/prefer-to-be-truthy': 'error',
			'tests/prefer-to-be': 'error',
			'tests/prefer-to-contain': 'error',
			'tests/prefer-to-have-length': 'error',
			'tests/prefer-todo': 'error',
			'tests/require-hook': 'error',
			'tests/require-top-level-describe': 'error',
			'tests/valid-describe-callback': 'error',
			'tests/valid-expect': 'error',
			'tests/valid-title': 'error',
		},
	},
];
