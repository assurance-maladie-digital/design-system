import { Api } from '~/types';

export const api: Api = {
	getFileExtension: {
		arguments: [
			{
				name: 'fileName',
				description: 'Le nom du fichier',
				type: 'string',
				required: true
			}
		],
		returnValue: [
			{
				type: 'string'
			}
		]
	}
};
