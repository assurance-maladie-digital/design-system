import { Api } from '~/types';

export const api: Api = {
	downloadFile: {
		arguments: [
			{
				name: 'content',
				description: 'Le fichier à télécharger.',
				type: 'ArrayBufferView | ArrayBuffer | Blob | string',
				required: true
			},
			{
				name: 'fileName',
				description: 'Le nom du fichier.',
				type: 'string',
				required: true
			},
			{
				name: 'type',
				description: 'Le type du fichier.',
				type: 'string',
				required: true
			},
			{
				name: 'utf8Bom',
				description: 'Ajoute une en-tête UTF-8 pour les fichiers Excel.',
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
