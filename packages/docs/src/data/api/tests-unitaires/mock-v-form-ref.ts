import { Api } from '~/types';

export const api: Api = {
	mockVFormRef: {
		arguments: [
			{
				name: 'isValid',
				description: 'La validité du formulaire.',
				type: 'boolean',
				required: true
			}
		],
		returnValue: [
			{
				type: 'FormRef'
			}
		]
	}
};
