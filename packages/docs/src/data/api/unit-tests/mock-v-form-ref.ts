import { Api } from '~/types';

export const api: Api = {
	mockVFormRef: {
		arguments: [
			{
				name: 'isValid',
				description: 'L’état de validité du formulaire.',
				type: 'boolean',
				required: true
			}
		],
		returnValue: [
			{
				type: 'VForm'
			}
		]
	}
};
