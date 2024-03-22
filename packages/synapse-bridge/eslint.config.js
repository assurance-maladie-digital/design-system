// @ts-check
import cnamts from '@cnamts/eslint-config';

export default cnamts([
	{
		files: [
			'**/*.vue',
		],
		rules: {
			'vue/multi-word-component-names': [
				'error',
				{
					ignores: ['Playground', 'Playground.template', 'Logo'],
				},
			],
		},
	},
]);
