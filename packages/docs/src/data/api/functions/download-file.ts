import { Api } from '~/types';

export const api: Api = {
	downloadFile: {
		arguments: [
			{
				name: 'content',
				description: 'Le fichier à mettre en téléchargement',
				type: 'ArrayBufferView | ArrayBuffer | Blob | string',
				required: true
			},
			{
				name: 'fileName',
				description: 'Le nom que le fichier doit prendre',
				type: 'string',
				required: true
			},
			{
				name: 'type',
				description: 'Le type du fichier',
				type: 'string',
				required: true
			},
			{
				name: 'utf8Bom',
				description: 'UTF-8 header pour les fichiers Excel',
				type: 'boolean',
				default: false
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	}
};
