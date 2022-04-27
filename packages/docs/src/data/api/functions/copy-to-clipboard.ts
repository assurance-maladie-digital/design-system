import { Api } from '~/types';

export const api: Api = {
	copyToClipBoard: {
		arguments: [
			{
				name: 'textToCopy',
				description: 'Le texte à copier dans le presse papier',
				type: 'string',
				required: true
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	}
};
