import { Api } from '~/types';

export const api: Api = {
	calcHumeFileSize: {
		arguments: [
			{
				name: 'size',
				description: 'La taille en bytes',
				type: 'number',
				required: true
			},
			{
				name: 'fileSizeUnits',
				description: 'Les unités à utiliser pour le retour',
				type: 'string[]',
				required: true
			},
			{
				name: 'separator',
				description: 'Le séparateur entre la taille et l’unité',
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
