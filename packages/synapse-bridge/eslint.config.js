// @ts-check
import cnamts from '@cnamts/eslint-config';

export default cnamts([
	{
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
