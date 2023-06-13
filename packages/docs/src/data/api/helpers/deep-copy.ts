import { Api } from '~/types';

export const api: Api = {
	deepCopy: {
		arguments: [
			{
				name: 'o',
				description: 'L’objet ou le tableau à copier.',
				type: 'any',
				required: true
			}
		],
		returnValue: [
			{
				type: 'any'
			}
		]
	}
};
