import { type FlatESLintConfigItem } from 'eslint-define-config';
import { pluginNode } from '../plugins';

export const node: FlatESLintConfigItem[] = [
	{
		plugins: {
			node: pluginNode,
		},
		rules: {
			'node/prefer-global/buffer': ['error', 'never'],
			'node/prefer-global/process': ['error', 'never'],
			'node/prefer-global/url-search-params': ['error', 'never'],
			'node/prefer-global/url': ['error', 'never'],
			'node/no-unsupported-features/es-builtins': 'error',
			'node/no-unsupported-features/es-syntax': 'error',
			'node/no-unsupported-features/node-builtins': 'error',
			'node/prefer-promises/dns': 'error',
			'node/prefer-promises/fs': 'error',
			'node/callback-return': 'error',
			'node/exports-style': ['error', 'module.exports'],
			'node/global-require': 'error',
			'node/handle-callback-err': ['error', '^(err|error)$'],
			'node/no-deprecated-api': 'error',
			'node/no-exports-assign': 'error',
			'node/no-mixed-requires': 'error',
			'node/no-new-require': 'error',
			'node/no-path-concat': 'error',
			'node/no-process-exit': 'error',
			'node/no-unpublished-bin': 'error',
			'node/process-exit-as-throw': 'error',
			'node/shebang': 'error',
		},
	},
];
