import { type FlatESLintConfigItem } from 'eslint-define-config';
import { pluginJsdoc } from '../plugins';

export const jsdoc: FlatESLintConfigItem[] = [
	{
		plugins: {
			jsdoc: pluginJsdoc,
		},
		rules: {
			'jsdoc/check-access': 'error',
			'jsdoc/check-alignment': 'error',
			'jsdoc/check-indentation': 'error',
			'jsdoc/check-param-names': 'error',
			'jsdoc/check-property-names': 'error',
			'jsdoc/check-tag-names': 'error',
			'jsdoc/check-types': 'error',
			'jsdoc/check-values': 'error',
			'jsdoc/empty-tags': 'error',
			'jsdoc/implements-on-classes': 'error',
			'jsdoc/multiline-blocks': 'error',
			'jsdoc/no-defaults': 'error',
			'jsdoc/no-multi-asterisks': 'error',
			'jsdoc/no-undefined-types': 'error',
			'jsdoc/require-param-description': 'error',
			'jsdoc/require-param-name': 'error',
			'jsdoc/require-property-description': 'error',
			'jsdoc/require-property-name': 'error',
			'jsdoc/require-property': 'error',
			'jsdoc/require-returns-check': 'error',
			'jsdoc/require-returns-description': 'error',
			'jsdoc/require-throws': 'error',
			'jsdoc/require-yields-check': 'error',
			'jsdoc/tag-lines': 'error',
		},
	},
];
